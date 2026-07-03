import { Badge } from "@/components/ui/Badge";
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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="hidden md:table-cell">Payment Method</TableHead>
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
                <p className="text-caption text-muted-foreground md:hidden">
                  {payment.paymentMethod}
                </p>
              </div>
            </TableCell>
            <TableCell>{formatCurrency(payment.amount)}</TableCell>
            <TableCell className="hidden md:table-cell">
              {payment.paymentMethod}
            </TableCell>
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
  );
}
