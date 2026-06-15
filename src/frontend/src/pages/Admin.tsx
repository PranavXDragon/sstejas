import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Link } from "@tanstack/react-router";
import {
  ChevronDown,
  ChevronUp,
  DollarSign,
  Package,
  Search,
  ShoppingBag,
  Timer,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "../components/Layout";
import { useAllOrders, useUpdateOrderStatus } from "../hooks/useBackend";
import { cn, formatDate, formatPrice, getOrderStatusColor } from "../lib/utils";
import type { Order, OrderStatus } from "../types";

const STATUS_OPTIONS: OrderStatus[] = [
  "Pending",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

const STATUS_FILTERS = ["All", ...STATUS_OPTIONS] as const;
type StatusFilter = (typeof STATUS_FILTERS)[number];

const SKEL_ROWS = ["sk1", "sk2", "sk3", "sk4", "sk5"] as const;
const SKEL_COLS = ["c1", "c2", "c3", "c4", "c5", "c6", "c7"] as const;

function truncatePrincipal(id: string): string {
  if (id.length <= 12) return id;
  return `${id.slice(0, 6)}…${id.slice(-5)}`;
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  sub?: string;
}) {
  return (
    <div className="bg-card border border-border rounded-sm p-5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
          {label}
        </p>
        <div className="h-8 w-8 rounded-sm bg-primary/10 flex items-center justify-center">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </div>
      <p className="font-display text-3xl font-semibold">{value}</p>
      {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
    </div>
  );
}

function OrderDetailRow({ order }: { order: Order }) {
  return (
    <div className="bg-muted/30 border-t border-border px-4 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Items */}
        <div>
          <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-3">
            Items
          </p>
          <div className="space-y-2">
            {order.items.map((item) => (
              <div
                key={`${item.productId}-${item.size}-${item.color}`}
                className="flex justify-between text-sm bg-background border border-border rounded-sm px-3 py-2"
              >
                <div className="min-w-0">
                  <p className="font-medium truncate">{item.productName}</p>
                  <p className="text-xs text-muted-foreground">
                    Size: {item.size} · Color: {item.color} · Qty:{" "}
                    {item.quantity}
                  </p>
                </div>
                <p className="text-sm font-medium ml-4 shrink-0">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping address */}
        <div>
          <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-3">
            Shipping Address
          </p>
          <address className="text-sm text-muted-foreground not-italic bg-background border border-border rounded-sm px-3 py-2 leading-relaxed">
            <p className="font-medium text-foreground">
              {order.shippingAddress.fullName}
            </p>
            <p>{order.shippingAddress.addressLine1}</p>
            {order.shippingAddress.addressLine2 && (
              <p>{order.shippingAddress.addressLine2}</p>
            )}
            <p>
              {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
              {order.shippingAddress.postalCode}
            </p>
            <p>{order.shippingAddress.country}</p>
          </address>
        </div>
      </div>
    </div>
  );
}

function OrderRow({ order }: { order: Order }) {
  const [expanded, setExpanded] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<OrderStatus>(
    order.status,
  );
  const updateStatus = useUpdateOrderStatus();

  const handleUpdate = async () => {
    if (selectedStatus === order.status) {
      toast.info("Status is already set to this value.");
      return;
    }
    try {
      const res = await updateStatus.mutateAsync({
        orderId: order.id,
        status: selectedStatus,
      });
      if (res && "err" in res && res.err) {
        toast.error(`Failed to update: ${res.err}`);
      } else {
        toast.success(
          `Order ${order.id.slice(0, 8)}… updated to ${selectedStatus}`,
        );
      }
    } catch {
      toast.error("Failed to update order status. Please try again.");
    }
  };

  return (
    <>
      <TableRow
        className="hover:bg-muted/30 transition-colors"
        data-ocid={`order-row-${order.id}`}
      >
        <TableCell className="font-mono text-xs text-muted-foreground">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            aria-label={expanded ? "Collapse order" : "Expand order"}
          >
            {expanded ? (
              <ChevronUp className="h-3.5 w-3.5 shrink-0" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5 shrink-0" />
            )}
            {order.id.slice(0, 12)}…
          </button>
        </TableCell>
        <TableCell className="font-mono text-xs text-muted-foreground">
          {truncatePrincipal(order.userId)}
        </TableCell>
        <TableCell className="text-sm">{formatDate(order.createdAt)}</TableCell>
        <TableCell className="text-right text-sm tabular-nums">
          {order.items.length}
        </TableCell>
        <TableCell className="text-right text-sm font-medium tabular-nums">
          {formatPrice(order.totalAmount)}
        </TableCell>
        <TableCell>
          <span
            className={cn(
              "inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-medium border",
              getOrderStatusColor(order.status),
            )}
          >
            {order.status}
          </span>
        </TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <Select
              value={selectedStatus}
              onValueChange={(v) => setSelectedStatus(v as OrderStatus)}
            >
              <SelectTrigger
                className="h-8 text-xs w-32"
                data-ocid={`status-select-${order.id}`}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {STATUS_OPTIONS.map((s) => (
                  <SelectItem key={s} value={s} className="text-xs">
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              size="sm"
              onClick={handleUpdate}
              disabled={
                updateStatus.isPending || selectedStatus === order.status
              }
              className="h-8 text-xs bg-primary text-primary-foreground hover:bg-primary/90 px-3"
              data-ocid={`status-update-${order.id}`}
            >
              {updateStatus.isPending ? "…" : "Update"}
            </Button>
          </div>
        </TableCell>
      </TableRow>
      {expanded && (
        <TableRow>
          <TableCell colSpan={7} className="p-0">
            <OrderDetailRow order={order} />
          </TableCell>
        </TableRow>
      )}
    </>
  );
}

export default function AdminPage() {
  const { isLoginSuccess } = useInternetIdentity();
  const { data: orders = [], isLoading } = useAllOrders();
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Guard: must be signed in
  if (!isLoginSuccess) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="h-8 w-8 text-muted-foreground" />
          </div>
          <h1 className="font-display text-2xl font-semibold">
            Admin Access Required
          </h1>
          <p className="mt-3 text-muted-foreground max-w-sm">
            You must be signed in with an admin account to access this panel.
          </p>
          <Link to="/">
            <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              Back to Store
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const typedOrders = orders as Order[];

  // Stats
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const revenueToday = typedOrders
    .filter((o) => o.createdAt >= today.getTime())
    .reduce((acc, o) => acc + o.totalAmount, 0);
  const pendingCount = typedOrders.filter((o) => o.status === "Pending").length;

  // Filter + search
  const filtered = typedOrders.filter((order) => {
    const matchesStatus =
      statusFilter === "All" || order.status === statusFilter;
    const matchesSearch =
      !searchQuery.trim() ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.userId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-1">
              Admin
            </p>
            <h1 className="font-display text-3xl font-semibold tracking-tight">
              Order Management
            </h1>
          </div>
          <Badge
            variant="outline"
            className="border-primary text-primary self-start"
          >
            Admin Panel
          </Badge>
        </div>

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
          data-ocid="admin-stats"
        >
          <StatCard
            icon={ShoppingBag}
            label="Total Orders"
            value={typedOrders.length}
            sub="All time"
          />
          <StatCard
            icon={Timer}
            label="Pending"
            value={pendingCount}
            sub="Awaiting fulfillment"
          />
          <StatCard
            icon={DollarSign}
            label="Revenue Today"
            value={formatPrice(revenueToday)}
            sub={new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          />
          <StatCard
            icon={Package}
            label="Total Products"
            value="16+"
            sub="In catalog"
          />
        </div>

        {/* Filters + Search */}
        <div
          className="flex flex-col sm:flex-row gap-4 mb-6"
          data-ocid="admin-filters"
        >
          {/* Status filter chips */}
          <div className="flex flex-wrap gap-2">
            {STATUS_FILTERS.map((s) => {
              const count =
                s === "All"
                  ? typedOrders.length
                  : typedOrders.filter((o) => o.status === s).length;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStatusFilter(s)}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-sm border transition-colors",
                    statusFilter === s
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground",
                  )}
                  data-ocid={`filter-${s.toLowerCase()}`}
                >
                  {s}
                  <span
                    className={cn(
                      "text-[10px] font-bold",
                      statusFilter === s
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground",
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative sm:ml-auto sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by order ID..."
              className="pl-8 h-9 text-sm"
              data-ocid="admin-search"
            />
          </div>
        </div>

        {/* Orders table */}
        <div
          className="bg-card border border-border rounded-sm overflow-hidden"
          data-ocid="orders-table"
        >
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/40 hover:bg-muted/40">
                  <TableHead className="text-xs uppercase tracking-widest font-semibold w-36">
                    Order ID
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-widest font-semibold">
                    Customer
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-widest font-semibold">
                    Date
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-widest font-semibold text-right">
                    Items
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-widest font-semibold text-right">
                    Total
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-widest font-semibold">
                    Status
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-widest font-semibold">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  SKEL_ROWS.map((rowId) => (
                    <TableRow key={rowId}>
                      {SKEL_COLS.map((colId) => (
                        <TableCell key={colId}>
                          <Skeleton className="h-4 w-full" />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : filtered.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="text-center py-16 text-muted-foreground"
                      data-ocid="orders-empty"
                    >
                      <Package className="h-10 w-10 mx-auto mb-3 text-muted-foreground/40" />
                      <p className="font-medium">No orders found</p>
                      <p className="text-sm mt-1">
                        {searchQuery || statusFilter !== "All"
                          ? "Try adjusting your filters."
                          : "Orders will appear here once customers start placing them."}
                      </p>
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map((order) => (
                    <OrderRow key={order.id} order={order} />
                  ))
                )}
              </TableBody>
            </Table>
          </div>
          {filtered.length > 0 && (
            <div className="border-t border-border px-5 py-3 text-xs text-muted-foreground flex items-center justify-between bg-muted/20">
              <span>
                Showing {filtered.length} of {typedOrders.length} order
                {typedOrders.length !== 1 ? "s" : ""}
              </span>
              {statusFilter !== "All" && (
                <button
                  type="button"
                  onClick={() => setStatusFilter("All")}
                  className="text-primary hover:underline underline-offset-2"
                >
                  Clear filter
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
