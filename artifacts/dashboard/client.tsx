import { Artifact } from "@/components/create-artifact";
import { ActivityIcon, RefreshCcwIcon } from "@/components/icons";

type Metadata = any;

export const dashboardArtifact = new Artifact<"dashboard", Metadata>({
  kind: "dashboard",
  description: "Agent X5.0 Master Control Dashboard",
  initialize: () => null,
  onStreamPart: ({ setArtifact, streamPart }) => {
    if (streamPart.type === "data-dashboardDelta") {
      setArtifact((draftArtifact) => ({
        ...draftArtifact,
        content: streamPart.data,
        isVisible: true,
        status: "streaming",
      }));
    }
  },
  content: ({ content }) => {
    try {
      const data = JSON.parse(content);
      return (
        <div className="p-6 space-y-6 overflow-y-auto h-full bg-zinc-50 dark:bg-zinc-900">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{data.title}</h1>
            <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
              {data.status}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Active Agents</div>
              <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{data.agents}</div>
            </div>
            <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Missed Revenue Recovered</div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">{data.trading.missed_revenue}</div>
            </div>
          </div>
          
          <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
            <div className="text-sm font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Active Trading Pairs</div>
            <div className="flex flex-wrap gap-2">
              {data.trading.active_pairs.map((pair: string) => (
                <span key={pair} className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded">
                  {pair}
                </span>
              ))}
            </div>
          </div>
          
          <div className="text-xs text-zinc-400 dark:text-zinc-500 text-center">
            Last Sync: {new Date(data.last_sync).toLocaleString()}
          </div>
        </div>
      );
    } catch (e) {
      return <div className="p-6 text-zinc-500">Initializing Dashboard...</div>;
    }
  },
  actions: [
    {
      icon: <RefreshCcwIcon size={18} />,
      description: "Refresh Dashboard",
      onClick: ({ sendMessage }) => {
        sendMessage({
          role: "user",
          parts: [{ type: "text", text: "Refresh the Agent X5.0 dashboard status." }],
        });
      },
    },
  ],
  toolbar: [
    {
      description: "Run System Health Check",
      icon: <ActivityIcon />,
      onClick: ({ sendMessage }) => {
        sendMessage({
          role: "user",
          parts: [{ type: "text", text: "Run a full health check on all 219 agents." }],
        });
      },
    },
  ],
});
