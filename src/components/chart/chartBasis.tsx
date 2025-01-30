"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Value } from "@radix-ui/react-select"

type chartProps = {
    category: {
        label: string
        unit: string
    }
    targetYear: string
    chartConfig: ChartConfig
    chartData: {
        month: string
        data: number | string
    }[]
}

export const ChartBasis = ({ category, targetYear, chartConfig, chartData }: chartProps) => {
    return (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{category.label}</CardTitle>
            <CardDescription>
              {targetYear}年の{category.label}の推移をあらわします
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width={800} height={400}>
                <AreaChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                    left: 24,
                    right: 24,
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
                    <ChartTooltip
                    cursor={true}
                    content={<ChartTooltipContent indicator="dot"/>}
                    formatter={(Value) => `${Value}${category.unit}`}
                    />
                    <YAxis domain={[0, "dataMAX"]}/>
                    <Area
                    dataKey="data"
                    type="linear"
                    fill="var(--color-desktop)"
                    fillOpacity={0.4}
                    stroke="var(--color-desktop)"
                    />
                </AreaChart>
                </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
    )
}
