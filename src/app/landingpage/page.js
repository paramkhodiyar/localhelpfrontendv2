"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FaChalkboardTeacher,
  FaBroom,
  FaDog,
  FaLaptopCode,
  FaTools,
  FaTruckMoving,
  FaUtensils,
  FaRegLightbulb,
  FaStar,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch(`${URL}/api/auth/me`, {
          credentials: "include",
        });

        if (!res.ok) {
          router.push("/login");
          return;
        }

        const data = await res.json();
        console.log("User:", data.user);

        setLoading(false);
      } catch (err) {
        router.push("/login");
      }
    }

    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-20 bg-[#ece9d8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-8">
              <div>
                <h1 className="text-5xl font-bold text-[#4a2e21] leading-tight mb-4">
                  All your needs,
                  <br />
                  solved in a click
                </h1>
                <p className="text-lg text-gray-600">
                  Connect with verified professionals for any service you need
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
                <h2 className="text-xl font-semibold text-[#4a2e21] mb-6">
                  What are you looking for?
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { icon: FaChalkboardTeacher, label: "Tutoring" },
                    { icon: FaBroom, label: "Home Cleaning" },
                    { icon: FaDog, label: "Pet Care" },
                    { icon: FaLaptopCode, label: "Computer Repair" },
                    { icon: FaTools, label: "Handyman" },
                    { icon: FaTruckMoving, label: "Movers" },
                    { icon: FaUtensils, label: "Home Cook" },
                    { icon: FaRegLightbulb, label: "Electrical" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center p-4 bg-[#f7f3eb] rounded-xl hover:shadow-md hover:scale-105 transition-all cursor-pointer border border-[#e5dcc7]"
                    >
                      <item.icon className="text-4xl text-[#7a5c49] mb-3" />
                      <span className="text-sm font-medium text-[#4a2e21]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-around bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#4a2e21]">1 Cr+</p>
                  <p className="text-sm text-gray-600 mt-1">Happy Customers</p>
                </div>

                <div className="w-px h-12 bg-gray-300"></div>

                <div className="text-center">
                  <p className="text-4xl font-bold text-[#4a2e21]">5000+</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Verified Providers
                  </p>
                </div>

                <div className="w-px h-12 bg-gray-300"></div>

                <div className="text-center">
                  <p className="text-4xl font-bold text-[#4a2e21]">4.8★</p>
                  <p className="text-sm text-gray-600 mt-1">Average Rating</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg h-[600px] rounded-2xl border border-gray-200 bg-[#f5f2ea] shadow-xl overflow-hidden">
                <img
                  src="/services.png"
                  alt="Collage of Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl font-bold text-[#4a2e21] text-center mb-12">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: FaCheckCircle,
                  title: "Verified Professionals",
                  description:
                    "All service providers are background checked and verified for your safety",
                },
                {
                  icon: FaStar,
                  title: "Quality Guaranteed",
                  description:
                    "99% customer satisfaction with our quality assurance program",
                },
                {
                  icon: FaHeadset,
                  title: "24/7 Support",
                  description:
                    "Round-the-clock customer support to help with any concerns",
                },
              ].map((feature, idx) => (
                <div key={idx} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f7f3eb] rounded-full mb-4">
                    <feature.icon className="text-3xl text-[#7a5c49]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#4a2e21] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#ece9d8] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl font-bold text-[#4a2e21] text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Priya Sharma",
                  service: "Home Cleaning",
                  rating: 5,
                  comment:
                    "Excellent service! The cleaner was professional and thorough. Will definitely book again.",
                },
                {
                  name: "Rajesh Kumar",
                  service: "Computer Repair",
                  rating: 5,
                  comment:
                    "Fixed my laptop in no time. Very knowledgeable and affordable. Highly recommended!",
                },
                {
                  name: "Anita Desai",
                  service: "Pet Care",
                  rating: 5,
                  comment:
                    "My dog absolutely loved the caretaker. Professional and caring service.",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div>
                    <p className="font-semibold text-[#4a2e21]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#4a2e21] py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-gray-300 mb-8">
              Join thousands of satisfied customers who trust us with their
              daily needs
            </p>
            <button className="bg-white text-[#4a2e21] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Book a Service Now
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
