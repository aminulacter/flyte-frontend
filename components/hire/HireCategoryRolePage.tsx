import type { HireRole } from "@/lib/types";
import { HireRoleSections, HireRoleSharedTail } from "@/components/hire/HireRolePage";

/** `/hire/[slug]` — broad category roles (frontend, backend, mobile, etc.). */
export default function HireCategoryRolePage({ role }: { role: HireRole }) {
  return (
    <div>
      <HireRoleSections role={role} />
      <HireRoleSharedTail />
    </div>
  );
}
