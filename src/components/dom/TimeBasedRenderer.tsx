import { ReactNode} from "react";
import { TimeRenderer} from "@/helpers/components/TimeRenderer";

type TimeProps = {
  children: ReactNode;
  startDate?: Date;
  endDate?: Date;
}

export const SunWrapper({ startDate, endDate, children }: TimeProps) => {
  const canRender = TimeRenderer(startDate, endDate)

  return <div>{canRender && children}</div>
}

export const MoonWrapper({ startDate, endDate, children }: TimeProps) => {
  const canRender = TimeRenderer(startDate, endDate)

  return <div>{!canRender && children}</div>
}
