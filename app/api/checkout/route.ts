import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.NEXT_STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  try {
    const { products } = await req.json();

    let activeProducts = await stripe.products.list({
      active: true,
    });

    const stripeProducts: { price: string; quantity: number }[] = [];

    for (const product of products) {
      const matchedProduct = activeProducts.data.find(
        (stripeProduct: { name: string }) =>
          stripeProduct.name.toLowerCase() === product.name.toLowerCase()
      );

      let priceId: string | null = null;

      if (!matchedProduct) {
        const stripeProduct = await stripe.products.create({
          name: product.name,
        });

        const price = await stripe.prices.create({
          product: stripeProduct.id,
          unit_amount: product.price * 100,
          currency: "usd",
        });

        priceId = price.id;
      } else {
        const prices = await stripe.prices.list({
          product: matchedProduct.id,
        });

        priceId = prices.data[0]?.id;
      }

      if (priceId) {
        stripeProducts.push({
          price: priceId,
          quantity: product.quantity ?? 1,
        });
      }
    }

    const session = await stripe.checkout.sessions.create({
      line_items: stripeProducts,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error in creating a new product", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
