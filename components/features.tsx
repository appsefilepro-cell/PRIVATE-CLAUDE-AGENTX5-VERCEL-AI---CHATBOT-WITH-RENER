"use client";

import { motion } from "framer-motion";
import {
  Code2,
  FileText,
  Image,
  Lock,
  MessageSquare,
  Puzzle,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Next.js App Router",
    description:
      "Build on top of the framework that achieves web performance and developer experience excellence with React Server Components and modern routing.",
  },
  {
    icon: MessageSquare,
    title: "AI SDK",
    description:
      "Choose specific models and providers with a unified API for generating text, structured objects, and tool calls with multiple LLMs.",
  },
  {
    icon: Puzzle,
    title: "Generative User Interfaces",
    description:
      "Go beyond text and enhance your chat responses with user interfaces, interactive components, and rich visual elements.",
  },
  {
    icon: FileText,
    title: "Artifacts",
    description:
      "Create custom artifacts that are specific to your needs, including documents, spreadsheets, and interactive visualizations.",
  },
  {
    icon: Code2,
    title: "Code Execution",
    description:
      "Run code snippets directly on the browser and display their output in real-time with support for multiple programming languages.",
  },
  {
    icon: Image,
    title: "Multimodal",
    description:
      "Attach files, images, and all the different types of media to enhance your conversations and get better AI responses.",
  },
  {
    icon: Lock,
    title: "Built-in Authentication",
    description:
      "Use email/password authentication to allow your users and guest access with secure session management and data protection.",
  },
];

export const Features = () => {
  return (
    <div className="mx-auto mt-8 w-full max-w-7xl px-4 md:mt-16 md:px-8">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="mb-4 font-bold text-3xl md:text-4xl">Features</h2>
        <p className="mx-auto max-w-2xl text-lg text-zinc-500 dark:text-zinc-400">
          Powerful features to build intelligent conversational experiences
        </p>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
            exit={{ opacity: 0, y: 20 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: Math.min(0.1 * index, 0.6) }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-zinc-100 p-2 dark:bg-zinc-800">
                <feature.icon className="size-6 text-zinc-700 dark:text-zinc-300" />
              </div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
