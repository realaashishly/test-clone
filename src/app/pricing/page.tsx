import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const PricingPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get started with Korizen using our straightforward Kredit system.
          Purchase Kredits to access our services.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Starter Pack</CardTitle>
            <CardDescription>Perfect for trying out Korizen</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">$5 USD</div>
            <div className="text-gray-600 mb-4">(₹425 INR)</div>
            <div className="text-2xl font-semibold bg-gradient-to-r from-[#00B2FF] to-[#0038FF] bg-clip-text text-transparent mb-6">
              30 Kredits
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#00B2FF] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Instant Credit Delivery
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#00B2FF] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Valid for 6 months
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-[#00B2FF] to-[#0038FF]">
              Purchase Now
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#00B2FF] to-[#0038FF] text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </div>
          <CardHeader>
            <CardTitle>Pro Pack</CardTitle>
            <CardDescription>Best value for regular users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">$20 USD</div>
            <div className="text-gray-600 mb-4">(₹1,700 INR)</div>
            <div className="text-2xl font-semibold bg-gradient-to-r from-[#00B2FF] to-[#0038FF] bg-clip-text text-transparent mb-6">
              150 Kredits
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#00B2FF] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                25% Bonus Kredits
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#00B2FF] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Valid for 12 months
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#00B2FF] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Priority Support
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-[#00B2FF] to-[#0038FF]">
              Purchase Now
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Enterprise Pack</CardTitle>
            <CardDescription>For power users and teams</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">$50 USD</div>
            <div className="text-gray-600 mb-4">(₹4,250 INR)</div>
            <div className="text-2xl font-semibold bg-gradient-to-r from-[#00B2FF] to-[#0038FF] bg-clip-text text-transparent mb-6">
              400 Kredits
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#00B2FF] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                33% Bonus Kredits
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#00B2FF] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Valid for 18 months
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#00B2FF] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                24/7 Priority Support
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#00B2FF] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Custom Solutions
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-[#00B2FF] to-[#0038FF]">
              Purchase Now
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-6">Important Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Currency Exchange</h3>
              <p className="text-gray-600">
                All prices are listed in USD and INR. The exchange rate is
                pegged at 1 USD = 85 INR. Actual charges may vary slightly based
                on your bank's exchange rate.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Kredit System</h3>
              <p className="text-gray-600">
                Kredits are our in-platform currency. Starting at 30 Kredits for
                $5, they can be used across all Korizen services.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Payment & Security</h2>
            <p className="text-gray-600">
              We process payments through Razorpay, a secure payment gateway
              that supports various payment methods including credit cards,
              debit cards, UPI, and net banking. All transactions are encrypted
              and processed securely.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
            <p className="text-gray-600 mb-4">
              We offer refunds within 7 days of purchase if:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>The Kredits have not been used</li>
              <li>There was a technical error in processing your payment</li>
              <li>The service was not as described</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Refund requests will be processed within 5-7 business days. The
              refunded amount will be credited back to the original payment
              method.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Kredits are non-transferable and non-exchangeable</li>
              <li>Kredits expire according to the package validity period</li>
              <li>
                Unused Kredits are non-refundable after the 7-day refund period
              </li>
              <li>Prices are subject to change with prior notice</li>
            </ul>
          </div>

          <div className="border-t pt-8 mt-8">
            <p className="text-gray-600">
              For any questions about our pricing or payment process, please{" "}
              <Link
                href="/contact-us"
                className="bg-gradient-to-r from-[#00B2FF] to-[#0038FF] bg-clip-text text-transparent hover:opacity-80">
                contact our support team
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
