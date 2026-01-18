import { createDocumentHandler } from "@/lib/artifacts/server";

export const dashboardDocumentHandler = createDocumentHandler<"dashboard">({
  kind: "dashboard",
  onCreateDocument: async ({ title, dataStream }) => {
    const dashboardData = {
      title: "Agent X5.0 Master Control Dashboard",
      status: "ACTIVE",
      agents: 219,
      trading: {
        mode: "PAPER",
        missed_revenue: "$1,338.58",
        active_pairs: ["BTC/USDT", "ETH/USDT", "SOL/USDT", "XRP/USDT", "ADA/USDT"]
      },
      last_sync: new Date().toISOString()
    };
    
    const content = JSON.stringify(dashboardData, null, 2);
    dataStream.write({
      type: "data-dashboardDelta",
      data: content,
      transient: true,
    });
    
    return content;
  },
  onUpdateDocument: async ({ document, description, dataStream }) => {
    return document.content;
  },
});
