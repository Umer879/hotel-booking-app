// app/admin/layout.js
"use client";

import AdminSidebar from "@/component/Dashboard/AdminSidebar/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">
        {children}
      </div>
    </div>
  );
}
