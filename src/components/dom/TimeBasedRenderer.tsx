import { useTimeBasedRendering } from './hooks/useTimeBasedRendering'
import { TimeBasedRenderingProps as Props } from '../models/props'

export const SunWrapper({ startDate, endDate, children }: Props) => {
  const canRender = useTimeBasedRendering(startDate, endDate)

  return <div>{canRender && children}</div>
}

export const MoonWrapper({ startDate, endDate, children }: Props) => {
  const canRender = useTimeBasedRendering(startDate, endDate)

  return <div>{!canRender && children}</div>
}
