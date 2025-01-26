"use client";

export default function ModerateButton({ commentId }: { commentId: string }) {
  const handleModerate = async () => {
    const password = prompt("Enter mod password:");
    if (!password) return;

    try {
      const response = await fetch("/api/moderate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ commentId, password }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      // Refresh comments after successful moderation
      window.location.reload();
    } catch (error) {
      console.error("Moderation failed:", error);
      alert("Moderation failed. Check console for details.");
    }
  };

  return (
    <button
      onClick={handleModerate}
      className="text-xs text-red-500 hover:text-red-700"
    >
      [Moderate]
    </button>
  );
}
