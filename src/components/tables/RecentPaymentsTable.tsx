import { Badge } from "@/components/ui/Badge";
import {
  MobileDataCard,
  MobileDataGrid,
  MobileDataRow,
} from "@/components/ui/MobileDataCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDate } from "@/utils/formatDate";
import { EPaymentStatus } from "@/types/payment";
import type { IPayment } from "@/types/payment";

interface IRecentPaymentsTableProps {
  payments: IPayment[];
}

function getPaymentVariant(status: EPaymentStatus) {
  switch (status) {
    case EPaymentStatus.PAID:
      return "success";
    case EPaymentStatus.PENDING:
      return "warning";
    case EPaymentStatus.FAILED:
      return "error";
    case EPaymentStatus.REFUNDED:
      return "outline";
    default:
      return "default";
  }
}

export function RecentPaymentsTable({ payments }: IRecentPaymentsTableProps) {
  return (
    <>
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden lg:table-cell">Paid Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>
                  <div>
                    <p className="font-medium">{payment.customerName}</p>
                    <p className="text-caption text-muted-foreground lg:hidden">
                      {formatDate(payment.paidAt)}
                    </p>
                  </div>
                </TableCell>
                <TableCell>{formatCurrency(payment.amount)}</TableCell>
                <TableCell>{payment.paymentMethod}</TableCell>
                <TableCell>
                  <Badge variant={getPaymentVariant(payment.status)}>
                    {payment.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  {formatDate(payment.paidAt)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="space-y-3 md:hidden">
        {payments.map((payment) => (
          <MobileDataCard key={payment.id}>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">
                  {payment.customerName}
                </p>
                <p className="mt-1 text-caption text-muted-foreground">
                  {formatDate(payment.paidAt)}
                </p>
              </div>
              <Badge variant={getPaymentVariant(payment.status)}>
                {payment.status}
              </Badge>
            </div>

            <MobileDataGrid>
              <MobileDataRow
                label="Amount"
                value={formatCurrency(payment.amount)}
              />
              <MobileDataRow label="Method" value={payment.paymentMethod} />
            </MobileDataGrid>
          </MobileDataCard>
        ))}
      </div>
    </>
  );
}
