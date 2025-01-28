"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

type chartProps = {
    label: string,
    chartData: { year: string, month: string, value: string }[]
}

export const ChartBasis = ({ label, chartData }: chartProps) => {
    const chartConfig = {
        value: {
          label: `${label}`,
          color: "hsl(var(--chart-1))",
        },
    } satisfies ChartConfig

    return (
        <Card className="mx-12 my-6">
        <CardHeader className="bg-slate-200">    
            <CardTitle className="text-2xl sm:lg">{label}</CardTitle>
        </CardHeader>
        <CardContent>
            <ChartContainer config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                left: 12,
                right: 12,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <defs>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop
                    offset="10%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.8}
                    />
                    <stop
                    offset="90%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.6}
                    />
                </linearGradient>
                </defs>
                <Area
                dataKey="value"
                type="natural"
                fill="url(#fillDesktop)"
                fillOpacity={0.4}
                stroke="var(--color-desktop)"
                stackId="a"
                />
            </AreaChart>
            </ChartContainer>
        </CardContent>
        </Card>
    )
}
