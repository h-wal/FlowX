// useWorkflowJobStatuses.ts
import { useEffect, useState } from "react";
import axios from "axios";

type JobStatus = "queued" | "running" | "success" | "failed" | "idle";

interface JobRecord {
  id: string;
  status: JobStatus;
  node: { id: string; type: string };
}

export function useWorkflowJobStatuses(flowId: string) {
  const [statuses, setStatuses] = useState<Record<string, JobStatus>>({});

  useEffect(() => {
    if (!flowId) return;

    const fetchStatuses = async () => {
      try {
        const res = await axios.get<JobRecord[]>(`http://localhost:3030/api/v1/status?flowId=${flowId}`, {
          withCredentials: true,
        });

        const map: Record<string, JobStatus> = {};
        res.data.forEach((job) => {
          if (job.node?.id) {
            map[job.node.id] = job.status;
          }
        });

        setStatuses(map);
      } catch (err) {
        console.error("Failed to fetch workflow statuses:", err);
      }
    };

    fetchStatuses();
    const interval = setInterval(fetchStatuses, 500);

    return () => clearInterval(interval);
  }, [flowId]);

  return statuses;
}
