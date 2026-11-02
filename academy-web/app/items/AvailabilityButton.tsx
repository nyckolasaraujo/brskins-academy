"use client";

import { useState } from "react";
import { setAvailability } from "@/app/lib/api";
import { useRouter } from "next/navigation";

interface Props {
  itemId: number;
  initialAvailable: boolean;
}

export default function AvailabilityButton({ itemId, initialAvailable }: Props) {
  const [available, setAvailable] = useState(initialAvailable);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleToggle = async () => {
    try {
      setLoading(true);
      const newStatus = !available;
      await setAvailability(itemId, newStatus);
      setAvailable(newStatus);
      router.refresh(); // Atualiza os dados na página
    } catch (err) {
      alert("Erro ao atualizar disponibilidade");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      style={{
        padding: "6px 12px",
        backgroundColor: available ? "#22c55e" : "#ef4444",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {loading ? "A atualizar..." : available ? "Disponível (Marcar Indisponível)" : "Indisponível (Marcar Disponível)"}
    </button>
  );
}