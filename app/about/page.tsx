"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-emerald-50 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        {/* Mission Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl shadow-lg overflow-hidden"
          >
            <Image
              src="/images/mission.jpg"
              alt="Our Mission"
              width={500}
              height={400}
              className="object-cover"
            />
          </motion.div>

          <div>
            <h2 className="text-3xl font-semibold text-emerald-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To empower professionals globally by providing a platform where
              their skills can be discovered, valued, and monetized instantly.
              We believe in bridging opportunities and building thriving
              professional communities.
            </p>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <h2 className="text-3xl font-semibold text-emerald-700 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To redefine how talent is discovered. Whether you’re a designer,
              instructor, or developer — we make it simple to present your
              expertise and reach clients worldwide with ease and confidence.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl shadow-lg overflow-hidden"
          >
            <Image
              src="/images/vision.jpg"
              alt="Our Vision"
              width={500}
              height={400}
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Join TalentKonnect?
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Create your profile today and become part of a growing global
            community.
          </p>
          <a
            href="/profile/start"
            className="inline-flex items-center rounded-xl bg-emerald-600 text-white px-6 py-3 font-semibold hover:bg-emerald-700 hover:translate-y-1 transition-transform duration-300"
          >
            Launch Your Profile →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
