'use client';

import { Nfc, CheckCircle, Users, Share2, Calendar, } from 'lucide-react';
import { motion } from 'framer-motion';

const nodes = [
  { id: 'register', icon: Nfc, text: 'Tap Keychain to Register', x: 50, y: 50 },
  { id: 'signup', icon: CheckCircle, text: 'Customer Registers & Notified', x: 200, y: 100 },
  { id: 'dashboard', icon: Users, text: 'Customer Added to Dashboard', x: 350, y: 150 },
  { id: 'referral', icon: Share2, text: 'Easy Referral (Tap to Share)', x: 200, y: 250 },
  { id: 'lead', icon: CheckCircle, text: 'New Lead Registered & Notified', x: 350, y: 300 },
  { id: 'actions', icon: Calendar, text: 'Lead Can Schedule, Apply, or Browse', x: 500, y: 350 },
];

const connections = [
  { from: 'register', to: 'signup' },
  { from: 'signup', to: 'dashboard' },
  { from: 'dashboard', to: 'referral' },
  { from: 'referral', to: 'lead' },
  { from: 'lead', to: 'actions' },
];

export default function CarfilioWorkflow() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center bg-gray-100 p-6 rounded-xl shadow-lg">
      <svg className="absolute w-full h-full overflow-visible">
        {connections.map((conn, idx) => {
          const fromNode = nodes.find((n) => n.id === conn.from);
          const toNode = nodes.find((n) => n.id === conn.to);
          if (!fromNode || !toNode) return null;
          return (
            <path
              key={idx}
              d={`M${fromNode.x + 20},${fromNode.y + 20} Q${(fromNode.x + toNode.x) / 2},${(fromNode.y + toNode.y) / 2} ${toNode.x + 20},${toNode.y + 20}`}
              fill="none"
              stroke="#3498db"
              strokeWidth="2"
            />
          );
        })}
      </svg>

      {nodes.map((node) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute flex flex-col items-center bg-white p-3 shadow-md rounded-lg"
          style={{ left: node.x, top: node.y }}
        >
          <node.icon className="text-blue-500 w-6 h-6" />
          <p className="text-xs text-center mt-1">{node.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
