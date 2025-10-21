import { Card } from "@mui/material";
import "@/components/layout/cardFloat.scss";

function CardFloatComp({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Card className="h-screen p-8">{children}</Card>
    </>
  );
}

export default CardFloatComp;
