import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import { formatCurrency } from "@/utils/formatCurrency";
import type { ICountryRevenuePoint } from "@/types/analytics";

interface IGeographicOverviewProps {
  countries: ICountryRevenuePoint[];
}

const WIDTH_CLASSES = ["w-full", "w-10/12", "w-8/12", "w-7/12", "w-6/12"];

export function GeographicOverview({ countries }: IGeographicOverviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Geographic Overview</CardTitle>
        <p className="text-caption text-muted-foreground">
          Revenue, customer count, and growth by country.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {countries.map((country, index) => (
          <div key={country.country} className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {country.country}
                </p>
                <p className="text-caption text-muted-foreground">
                  {country.customers} customers
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">
                  {formatCurrency(country.revenue)}
                </p>
                <Badge variant="success">+{country.growth}%</Badge>
              </div>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div
                className={cn(
                  "h-2 rounded-full bg-primary",
                  WIDTH_CLASSES[index] ?? "w-1/2",
                )}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
