import { useState, type JSX } from "react";

const sidebarNavItems = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
            </svg>
        ),
    },
    {
        id: "analytics",
        label: "Analytics",
        icon: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
        ),
    },
    {
        id: "orders",
        label: "Orders",
        icon: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
            </svg>
        ),
    },
    {
        id: "customers",
        label: "Customers",
        icon: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
    },
    {
        id: "products",
        label: "Products",
        icon: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            </svg>
        ),
    },
    {
        id: "reports",
        label: "Reports",
        icon: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
    },
    {
        id: "settings",
        label: "Settings",
        icon: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
            </svg>
        ),
    },
];

const statsCards = [
    {
        id: 1,
        title: "Total Revenue",
        value: "$48,295",
        change: "+12.5%",
        changeType: "positive",
        period: "vs last month",
        icon: (
            <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
        ),
        color: "text-primary-500",
        bgColor: "bg-primary-50",
    },
    {
        id: 2,
        title: "Total Orders",
        value: "3,842",
        change: "+8.2%",
        changeType: "positive",
        period: "vs last month",
        icon: (
            <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
            </svg>
        ),
        color: "text-textsuccess",
        bgColor: "bg-[rgba(41,163,122,0.08)]",
    },
    {
        id: 3,
        title: "New Customers",
        value: "1,257",
        change: "-3.1%",
        changeType: "negative",
        period: "vs last month",
        icon: (
            <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
        color: "text-textwarning",
        bgColor: "bg-[rgba(225,166,19,0.08)]",
    },
    {
        id: 4,
        title: "Avg. Order Value",
        value: "$125.60",
        change: "+5.7%",
        changeType: "positive",
        period: "vs last month",
        icon: (
            <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        color: "text-texterror",
        bgColor: "bg-[rgba(237,19,28,0.08)]",
    },
];

const recentOrders = [
    {
        id: "#ORD-7821",
        customer: "Sarah Johnson",
        product: "Premium Plan",
        date: "Dec 18, 2024",
        amount: "$299.00",
        status: "Completed",
    },
    {
        id: "#ORD-7820",
        customer: "Michael Chen",
        product: "Basic Plan",
        date: "Dec 18, 2024",
        amount: "$99.00",
        status: "Processing",
    },
    {
        id: "#ORD-7819",
        customer: "Emily Rodriguez",
        product: "Enterprise Plan",
        date: "Dec 17, 2024",
        amount: "$799.00",
        status: "Completed",
    },
    {
        id: "#ORD-7818",
        customer: "David Kim",
        product: "Premium Plan",
        date: "Dec 17, 2024",
        amount: "$299.00",
        status: "Pending",
    },
    {
        id: "#ORD-7817",
        customer: "Jessica Williams",
        product: "Basic Plan",
        date: "Dec 16, 2024",
        amount: "$99.00",
        status: "Cancelled",
    },
    {
        id: "#ORD-7816",
        customer: "Robert Martinez",
        product: "Enterprise Plan",
        date: "Dec 16, 2024",
        amount: "$799.00",
        status: "Completed",
    },
    {
        id: "#ORD-7815",
        customer: "Amanda Thompson",
        product: "Premium Plan",
        date: "Dec 15, 2024",
        amount: "$299.00",
        status: "Processing",
    },
];

const topProducts = [
    {
        id: 1,
        name: "Enterprise Plan",
        sales: 842,
        revenue: "$672,358",
        growth: "+18.2%",
        growthType: "positive",
    },
    {
        id: 2,
        name: "Premium Plan",
        sales: 1204,
        revenue: "$359,996",
        growth: "+12.5%",
        growthType: "positive",
    },
    {
        id: 3,
        name: "Basic Plan",
        sales: 1796,
        revenue: "$177,804",
        growth: "+5.3%",
        growthType: "positive",
    },
    {
        id: 4,
        name: "Starter Pack",
        sales: 423,
        revenue: "$21,150",
        growth: "-2.1%",
        growthType: "negative",
    },
];

const chartBars = [
    { month: "Jul", value: 65, height: 65 },
    { month: "Aug", value: 78, height: 78 },
    { month: "Sep", value: 55, height: 55 },
    { month: "Oct", value: 82, height: 82 },
    { month: "Nov", value: 70, height: 70 },
    { month: "Dec", value: 90, height: 90 },
];

const activityFeed = [
    {
        id: 1,
        type: "order",
        message: "New order #ORD-7821 received from Sarah Johnson",
        time: "2 min ago",
        color: "bg-primary-500",
    },
    {
        id: 2,
        type: "customer",
        message: "New customer registration: Michael Chen",
        time: "15 min ago",
        color: "bg-textsuccess",
    },
    {
        id: 3,
        type: "alert",
        message: "Low stock alert: Enterprise Plan (5 remaining)",
        time: "1 hr ago",
        color: "bg-textwarning",
    },
    {
        id: 4,
        type: "payment",
        message: "Payment of $799.00 confirmed for #ORD-7819",
        time: "2 hr ago",
        color: "bg-textsuccess",
    },
    {
        id: 5,
        type: "refund",
        message: "Refund request submitted for #ORD-7815",
        time: "3 hr ago",
        color: "bg-texterror",
    },
];

const statusColors: Record<string, string> = {
    Completed: "bg-[rgba(41,163,122,0.12)] text-textsuccess",
    Processing: "bg-[rgba(59,130,246,0.12)] text-primary-600",
    Pending: "bg-[rgba(225,166,19,0.12)] text-textwarning",
    Cancelled: "bg-[rgba(237,19,28,0.12)] text-texterror",
};

export const Box = (): JSX.Element => {
    const [view, setView] = useState<"login" | "signup" | "otp" | "dashboard">("login");
    const [activeNav, setActiveNav] = useState("dashboard");
    const [searchValue, setSearchValue] = useState("");
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState("This Month");

    if (view === "login") {
        return (
            <div className="flex min-h-screen items-center justify-center bg-neutral-50 p-4">
                <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-xl" style={{ borderColor: 'var(--border-100)' }}>
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500 text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-textdark" style={{ fontFamily: 'var(--heading-md-font-family)' }}>Welcome Back</h2>
                        <p className="text-texthint" style={{ fontFamily: 'var(--body-sm-font-family)' }}>Please enter your details to sign in</p>
                    </div>
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setView("dashboard"); }}>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-textdark">Email Address</label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full rounded-lg border px-4 py-2.5 outline-none transition-all focus:ring-2 focus:ring-primary-500/20"
                                style={{ borderColor: 'var(--border-200)' }}
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-textdark">Password</label>
                                <button type="button" className="text-xs font-semibold text-primary-600 hover:text-primary-700">Forgot password?</button>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full rounded-lg border px-4 py-2.5 outline-none transition-all focus:ring-2 focus:ring-primary-500/20"
                                style={{ borderColor: 'var(--border-200)' }}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-primary-500 py-3 font-semibold text-white transition-all hover:bg-primary-600 active:scale-[0.98]"
                        >
                            Sign In
                        </button>
                    </form>
                    <div className="mt-6 text-center text-sm">
                        <span className="text-texthint">Don't have an account? </span>
                        <button onClick={() => setView("signup")} className="font-semibold text-primary-600 hover:text-primary-700">Create Account</button>
                    </div>
                </div>
            </div>
        );
    }

    if (view === "signup") {
        return (
            <div className="flex min-h-screen items-center justify-center bg-neutral-50 p-4">
                <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-xl" style={{ borderColor: 'var(--border-100)' }}>
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold text-textdark" style={{ fontFamily: 'var(--heading-md-font-family)' }}>Create Account</h2>
                        <p className="text-texthint" style={{ fontFamily: 'var(--body-sm-font-family)' }}>Join Dashify to start managing your data</p>
                    </div>
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setView("otp"); }}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-textdark">First Name</label>
                                <input className="w-full rounded-lg border px-4 py-2.5" style={{ borderColor: 'var(--border-200)' }} placeholder="John" required />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-textdark">Last Name</label>
                                <input className="w-full rounded-lg border px-4 py-2.5" style={{ borderColor: 'var(--border-200)' }} placeholder="Doe" required />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-textdark">Email Address</label>
                            <input type="email" className="w-full rounded-lg border px-4 py-2.5" style={{ borderColor: 'var(--border-200)' }} placeholder="name@company.com" required />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-textdark">Password</label>
                            <input type="password" title="Must contain at least 8 characters" className="w-full rounded-lg border px-4 py-2.5" style={{ borderColor: 'var(--border-200)' }} placeholder="••••••••" required />
                        </div>
                        <button type="submit" className="w-full rounded-lg bg-primary-500 py-3 font-semibold text-white transition-all hover:bg-primary-600">Register</button>
                    </form>
                    <div className="mt-6 text-center text-sm">
                        <span className="text-texthint">Already have an account? </span>
                        <button onClick={() => setView("login")} className="font-semibold text-primary-600 hover:text-primary-700">Sign In</button>
                    </div>
                </div>
            </div>
        );
    }

    if (view === "otp") {
        return (
            <div className="flex min-h-screen items-center justify-center bg-neutral-50 p-4">
                <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-xl" style={{ borderColor: 'var(--border-100)' }}>
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-textdark">Verification</h2>
                        <p className="text-texthint">We sent a 4-digit code to your email</p>
                    </div>
                    <div className="flex justify-center gap-3 mb-8">
                        {[1, 2, 3, 4].map(i => (
                            <input key={i} type="text" maxLength={1} className="w-12 h-14 text-center text-2xl font-bold border rounded-xl focus:ring-2 focus:ring-primary-500/20 outline-none" style={{ borderColor: 'var(--border-200)' }} />
                        ))}
                    </div>
                    <button onClick={() => setView("dashboard")} className="w-full rounded-lg bg-primary-500 py-3 font-semibold text-white hover:bg-primary-600 transition-all">Verify & Dashboard</button>
                    <div className="mt-6 text-center text-sm">
                        <span className="text-texthint">Didn't receive code? </span>
                        <button className="font-semibold text-primary-600 hover:text-primary-700">Resend Code</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="flex h-screen w-full overflow-hidden"
            style={{
                fontFamily: "var(--body-lg-font-family)",
                backgroundColor: "var(--neutral-50)",
            }}
        >
            {/* Sidebar */}
            <aside
                className="flex flex-col w-[240px] min-w-[240px] h-full bg-white border-r"
                style={{ borderColor: "var(--border-100)" }}
            >
                {/* Logo */}
                <div
                    className="flex items-center gap-3 px-6 py-5 border-b"
                    style={{ borderColor: "var(--border-100)" }}
                >
                    <div
                        className="flex items-center justify-center w-9 h-9 rounded-lg"
                        style={{ backgroundColor: "var(--primarysource)" }}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                        </svg>
                    </div>
                    <span
                        className="text-[18px] font-semibold tracking-tight"
                        style={{
                            color: "var(--textdark)",
                            fontFamily: "var(--heading-sm-font-family)",
                        }}
                    >
                        Dashify
                    </span>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col flex-1 px-3 py-4 gap-1 overflow-y-auto">
                    <p
                        className="px-3 mb-2 text-[11px] font-medium uppercase tracking-widest"
                        style={{
                            color: "var(--neutral-400)",
                            fontFamily: "var(--label-sm-font-family)",
                        }}
                    >
                        Main Menu
                    </p>
                    {sidebarNavItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveNav(item.id)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left w-full transition-all duration-150 ${activeNav === item.id ? "text-white" : "hover:bg-neutral-50"
                                }`}
                            style={
                                activeNav === item.id
                                    ? { backgroundColor: "var(--primarysource)", color: "white" }
                                    : { color: "var(--neutral-700)" }
                            }
                        >
                            <span
                                className={activeNav === item.id ? "text-white" : ""}
                                style={
                                    activeNav !== item.id ? { color: "var(--neutral-500)" } : {}
                                }
                            >
                                {item.icon}
                            </span>
                            <span
                                className="text-[14px] font-medium"
                                style={{
                                    fontFamily: "var(--label-lg-font-family)",
                                    letterSpacing: "var(--label-lg-letter-spacing)",
                                }}
                            >
                                {item.label}
                            </span>
                            {item.id === "orders" && (
                                <span
                                    className="ml-auto text-[11px] font-semibold px-2 py-0.5 rounded-full"
                                    style={
                                        activeNav === item.id
                                            ? {
                                                backgroundColor: "rgba(255,255,255,0.25)",
                                                color: "white",
                                            }
                                            : {
                                                backgroundColor: "var(--primary-100)",
                                                color: "var(--primary-700)",
                                            }
                                    }
                                >
                                    12
                                </span>
                            )}
                        </button>
                    ))}
                </nav>

                {/* User Profile at bottom */}
                <div
                    className="flex items-center gap-3 px-4 py-4 border-t"
                    style={{ borderColor: "var(--border-100)" }}
                >
                    <div
                        className="flex items-center justify-center w-9 h-9 rounded-full text-white text-[14px] font-semibold flex-shrink-0"
                        style={{ backgroundColor: "var(--primarysource)" }}
                    >
                        AJ
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span
                            className="text-[13px] font-semibold truncate"
                            style={{
                                color: "var(--textdark)",
                                fontFamily: "var(--title-sm-font-family)",
                            }}
                        >
                            Alex Johnson
                        </span>
                        <span
                            className="text-[11px] truncate"
                            style={{
                                color: "var(--texthint)",
                                fontFamily: "var(--body-sm-font-family)",
                            }}
                        >
                            admin@dashify.io
                        </span>
                    </div>
                    <button
                        className="ml-auto flex-shrink-0"
                        style={{ color: "var(--neutral-400)" }}
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex flex-col flex-1 min-w-0 h-full overflow-hidden">
                {/* Top Header */}
                <header
                    className="flex items-center justify-between px-6 py-4 bg-white border-b flex-shrink-0"
                    style={{ borderColor: "var(--border-100)" }}
                >
                    <div className="flex flex-col">
                        <h1
                            className="text-[22px] font-semibold leading-tight"
                            style={{
                                color: "var(--textdark)",
                                fontFamily: "var(--heading-sm-font-family)",
                            }}
                        >
                            Dashboard
                        </h1>
                        <p
                            className="text-[13px]"
                            style={{
                                color: "var(--texthint)",
                                fontFamily: "var(--body-sm-font-family)",
                            }}
                        >
                            Welcome back, Alex! Here's what's happening today.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Search */}
                        <div
                            className="flex items-center gap-2 px-3 py-2 rounded-lg border"
                            style={{
                                borderColor: "var(--border-200)",
                                backgroundColor: "var(--neutral-50)",
                            }}
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ color: "var(--neutral-400)" }}
                            >
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                className="bg-transparent text-[13px] w-[160px] outline-none border-none"
                                style={{
                                    color: "var(--textdark)",
                                    fontFamily: "var(--body-sm-font-family)",
                                }}
                            />
                        </div>

                        {/* Period Selector */}
                        <div className="relative">
                            <select
                                value={selectedPeriod}
                                onChange={(e) => setSelectedPeriod(e.target.value)}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg border text-[13px] font-medium cursor-pointer pr-8 appearance-none"
                                style={{
                                    borderColor: "var(--border-200)",
                                    color: "var(--textdark)",
                                    fontFamily: "var(--label-lg-font-family)",
                                    backgroundColor: "white",
                                }}
                            >
                                <option>This Week</option>
                                <option>This Month</option>
                                <option>This Quarter</option>
                                <option>This Year</option>
                            </select>
                            <svg
                                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ color: "var(--neutral-500)" }}
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>

                        {/* Notifications */}
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setNotificationsOpen(!notificationsOpen);
                                    setProfileOpen(false);
                                }}
                                className="relative flex items-center justify-center w-9 h-9 rounded-lg border transition-colors hover:bg-neutral-50"
                                style={{ borderColor: "var(--border-200)" }}
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ color: "var(--neutral-600)" }}
                                >
                                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 01-3.46 0" />
                                </svg>
                                <span
                                    className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                                    style={{ backgroundColor: "var(--texterror)" }}
                                />
                            </button>
                            {notificationsOpen && (
                                <div
                                    className="absolute right-0 top-11 w-[320px] bg-white rounded-xl border shadow-lg z-50"
                                    style={{
                                        borderColor: "var(--border-100)",
                                        boxShadow: "var(--shadow-lg)",
                                    }}
                                >
                                    <div
                                        className="flex items-center justify-between px-4 py-3 border-b"
                                        style={{ borderColor: "var(--border-100)" }}
                                    >
                                        <span
                                            className="text-[14px] font-semibold"
                                            style={{
                                                color: "var(--textdark)",
                                                fontFamily: "var(--title-sm-font-family)",
                                            }}
                                        >
                                            Notifications
                                        </span>
                                        <button
                                            className="text-[12px] font-medium"
                                            style={{ color: "var(--primarysource)" }}
                                        >
                                            Mark all read
                                        </button>
                                    </div>
                                    <div
                                        className="flex flex-col divide-y"
                                        style={{ borderColor: "var(--border-50)" }}
                                    >
                                        {activityFeed.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-start gap-3 px-4 py-3 hover:bg-neutral-50 cursor-pointer"
                                            >
                                                <div
                                                    className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${item.color}`}
                                                />
                                                <div className="flex flex-col gap-0.5">
                                                    <p
                                                        className="text-[13px]"
                                                        style={{
                                                            color: "var(--textdark)",
                                                            fontFamily: "var(--body-sm-font-family)",
                                                        }}
                                                    >
                                                        {item.message}
                                                    </p>
                                                    <span
                                                        className="text-[11px]"
                                                        style={{ color: "var(--texthint)" }}
                                                    >
                                                        {item.time}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Profile */}
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setProfileOpen(!profileOpen);
                                    setNotificationsOpen(false);
                                }}
                                className="flex items-center justify-center w-9 h-9 rounded-full text-white text-[13px] font-semibold"
                                style={{ backgroundColor: "var(--primarysource)" }}
                            >
                                AJ
                            </button>
                            {profileOpen && (
                                <div
                                    className="absolute right-0 top-11 w-[200px] bg-white rounded-xl border shadow-lg z-50"
                                    style={{
                                        borderColor: "var(--border-100)",
                                        boxShadow: "var(--shadow-lg)",
                                    }}
                                >
                                    <div className="flex flex-col px-2 py-2 gap-0.5">
                                        {[
                                            "Profile",
                                            "Account Settings",
                                            "Billing",
                                            "Help & Support",
                                        ].map((item) => (
                                            <button
                                                key={item}
                                                className="flex items-center px-3 py-2 rounded-lg text-[13px] text-left hover:bg-neutral-50 transition-colors"
                                                style={{
                                                    color: "var(--textdark)",
                                                    fontFamily: "var(--body-sm-font-family)",
                                                }}
                                            >
                                                {item}
                                            </button>
                                        ))}
                                        <div
                                            className="border-t my-1"
                                            style={{ borderColor: "var(--border-100)" }}
                                        />
                                        <button
                                            className="flex items-center px-3 py-2 rounded-lg text-[13px] text-left hover:bg-neutral-50 transition-colors"
                                            style={{
                                                color: "var(--texterror)",
                                                fontFamily: "var(--body-sm-font-family)",
                                            }}
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Scrollable Content */}
                <main className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-4 gap-4">
                        {statsCards.map((card) => (
                            <div
                                key={card.id}
                                className="flex flex-col gap-3 p-5 bg-white rounded-xl border"
                                style={{ borderColor: "var(--border-100)" }}
                            >
                                <div className="flex items-center justify-between">
                                    <span
                                        className="text-[13px] font-medium"
                                        style={{
                                            color: "var(--texthint)",
                                            fontFamily: "var(--label-lg-font-family)",
                                        }}
                                    >
                                        {card.title}
                                    </span>
                                    <div
                                        className={`flex items-center justify-center w-9 h-9 rounded-lg ${card.bgColor}`}
                                    >
                                        <span className={card.color}>{card.icon}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span
                                        className="text-[26px] font-semibold leading-tight"
                                        style={{
                                            color: "var(--textdark)",
                                            fontFamily: "var(--heading-l-font-family)",
                                        }}
                                    >
                                        {card.value}
                                    </span>
                                    <div className="flex items-center gap-1.5">
                                        <span
                                            className={`text-[12px] font-semibold ${card.changeType === "positive" ? "text-textsuccess" : "text-texterror"}`}
                                            style={{ fontFamily: "var(--label-md-font-family)" }}
                                        >
                                            {card.change}
                                        </span>
                                        <span
                                            className="text-[12px]"
                                            style={{
                                                color: "var(--texthint)",
                                                fontFamily: "var(--body-sm-font-family)",
                                            }}
                                        >
                                            {card.period}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Charts Row */}
                    <div className="grid grid-cols-3 gap-4">
                        {/* Revenue Chart */}
                        <div
                            className="col-span-2 flex flex-col gap-4 p-5 bg-white rounded-xl border"
                            style={{ borderColor: "var(--border-100)" }}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-0.5">
                                    <h2
                                        className="text-[16px] font-semibold"
                                        style={{
                                            color: "var(--textdark)",
                                            fontFamily: "var(--heading-xs-font-family)",
                                        }}
                                    >
                                        Revenue Overview
                                    </h2>
                                    <p
                                        className="text-[12px]"
                                        style={{
                                            color: "var(--texthint)",
                                            fontFamily: "var(--body-sm-font-family)",
                                        }}
                                    >
                                        Monthly revenue for the last 6 months
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    {["Revenue", "Orders"].map((label, i) => (
                                        <div key={label} className="flex items-center gap-1.5">
                                            <div
                                                className="w-2.5 h-2.5 rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        i === 0
                                                            ? "var(--primarysource)"
                                                            : "var(--neutral-200)",
                                                }}
                                            />
                                            <span
                                                className="text-[12px]"
                                                style={{
                                                    color: "var(--texthint)",
                                                    fontFamily: "var(--body-sm-font-family)",
                                                }}
                                            >
                                                {label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bar Chart */}
                            <div className="flex items-end gap-3 h-[160px] pt-4">
                                {chartBars.map((bar) => (
                                    <div
                                        key={bar.month}
                                        className="flex flex-col items-center gap-2 flex-1"
                                    >
                                        <div
                                            className="flex items-end gap-1 w-full justify-center"
                                            style={{ height: "120px" }}
                                        >
                                            <div
                                                className="w-[28px] rounded-t-md transition-all duration-300"
                                                style={{
                                                    height: `${bar.height}%`,
                                                    backgroundColor: "var(--primarysource)",
                                                    opacity: bar.month === "Dec" ? 1 : 0.5,
                                                }}
                                            />
                                            <div
                                                className="w-[28px] rounded-t-md"
                                                style={{
                                                    height: `${bar.height * 0.6}%`,
                                                    backgroundColor: "var(--neutral-200)",
                                                }}
                                            />
                                        </div>
                                        <span
                                            className="text-[11px]"
                                            style={{
                                                color: "var(--texthint)",
                                                fontFamily: "var(--body-sm-font-family)",
                                            }}
                                        >
                                            {bar.month}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Chart Footer */}
                            <div
                                className="flex items-center justify-between pt-3 border-t"
                                style={{ borderColor: "var(--border-50)" }}
                            >
                                <div className="flex flex-col gap-0.5">
                                    <span
                                        className="text-[11px]"
                                        style={{ color: "var(--texthint)" }}
                                    >
                                        Total Revenue (Dec)
                                    </span>
                                    <span
                                        className="text-[18px] font-semibold"
                                        style={{
                                            color: "var(--textdark)",
                                            fontFamily: "var(--heading-xs-font-family)",
                                        }}
                                    >
                                        $48,295
                                    </span>
                                </div>
                                <div className="flex flex-col gap-0.5 text-right">
                                    <span
                                        className="text-[11px]"
                                        style={{ color: "var(--texthint)" }}
                                    >
                                        Total Orders (Dec)
                                    </span>
                                    <span
                                        className="text-[18px] font-semibold"
                                        style={{
                                            color: "var(--textdark)",
                                            fontFamily: "var(--heading-xs-font-family)",
                                        }}
                                    >
                                        3,842
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Top Products */}
                        <div
                            className="flex flex-col gap-4 p-5 bg-white rounded-xl border"
                            style={{ borderColor: "var(--border-100)" }}
                        >
                            <div className="flex items-center justify-between">
                                <h2
                                    className="text-[16px] font-semibold"
                                    style={{
                                        color: "var(--textdark)",
                                        fontFamily: "var(--heading-xs-font-family)",
                                    }}
                                >
                                    Top Products
                                </h2>
                                <button
                                    className="text-[12px] font-medium"
                                    style={{
                                        color: "var(--primarysource)",
                                        fontFamily: "var(--label-md-font-family)",
                                    }}
                                >
                                    View all
                                </button>
                            </div>

                            <div className="flex flex-col gap-3">
                                {topProducts.map((product, index) => (
                                    <div key={product.id} className="flex flex-col gap-1.5">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className="flex items-center justify-center w-5 h-5 rounded text-[10px] font-bold text-white"
                                                    style={{
                                                        backgroundColor:
                                                            index === 0
                                                                ? "var(--primarysource)"
                                                                : "var(--neutral-300)",
                                                    }}
                                                >
                                                    {index + 1}
                                                </span>
                                                <span
                                                    className="text-[13px] font-medium"
                                                    style={{
                                                        color: "var(--textdark)",
                                                        fontFamily: "var(--title-sm-font-family)",
                                                    }}
                                                >
                                                    {product.name}
                                                </span>
                                            </div>
                                            <span
                                                className={`text-[11px] font-semibold ${product.growthType === "positive" ? "text-textsuccess" : "text-texterror"}`}
                                            >
                                                {product.growth}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div
                                                className="flex-1 h-1.5 rounded-full mr-3"
                                                style={{ backgroundColor: "var(--neutral-100)" }}
                                            >
                                                <div
                                                    className="h-full rounded-full"
                                                    style={{
                                                        width: `${(product.sales / 1796) * 100}%`,
                                                        backgroundColor:
                                                            index === 0
                                                                ? "var(--primarysource)"
                                                                : "var(--neutral-400)",
                                                    }}
                                                />
                                            </div>
                                            <span
                                                className="text-[11px] font-medium flex-shrink-0"
                                                style={{
                                                    color: "var(--texthint)",
                                                    fontFamily: "var(--body-sm-font-family)",
                                                }}
                                            >
                                                {product.revenue}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Donut Chart Placeholder */}
                            <div className="flex items-center justify-center mt-2">
                                <div className="relative w-[100px] h-[100px]">
                                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                                        <circle
                                            cx="18"
                                            cy="18"
                                            r="15.9"
                                            fill="none"
                                            stroke="var(--neutral-100)"
                                            strokeWidth="3.8"
                                        />
                                        <circle
                                            cx="18"
                                            cy="18"
                                            r="15.9"
                                            fill="none"
                                            stroke="var(--primarysource)"
                                            strokeWidth="3.8"
                                            strokeDasharray="50 50"
                                            strokeLinecap="round"
                                        />
                                        <circle
                                            cx="18"
                                            cy="18"
                                            r="15.9"
                                            fill="none"
                                            stroke="var(--primary-300)"
                                            strokeWidth="3.8"
                                            strokeDasharray="25 75"
                                            strokeDashoffset="-50"
                                            strokeLinecap="round"
                                        />
                                        <circle
                                            cx="18"
                                            cy="18"
                                            r="15.9"
                                            fill="none"
                                            stroke="var(--neutral-300)"
                                            strokeWidth="3.8"
                                            strokeDasharray="15 85"
                                            strokeDashoffset="-75"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span
                                            className="text-[14px] font-bold"
                                            style={{ color: "var(--textdark)" }}
                                        >
                                            4.3k
                                        </span>
                                        <span
                                            className="text-[9px]"
                                            style={{ color: "var(--texthint)" }}
                                        >
                                            Sales
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Orders Table */}
                    <div
                        className="flex flex-col bg-white rounded-xl border"
                        style={{ borderColor: "var(--border-100)" }}
                    >
                        <div
                            className="flex items-center justify-between px-5 py-4 border-b"
                            style={{ borderColor: "var(--border-100)" }}
                        >
                            <div className="flex flex-col gap-0.5">
                                <h2
                                    className="text-[16px] font-semibold"
                                    style={{
                                        color: "var(--textdark)",
                                        fontFamily: "var(--heading-xs-font-family)",
                                    }}
                                >
                                    Recent Orders
                                </h2>
                                <p
                                    className="text-[12px]"
                                    style={{
                                        color: "var(--texthint)",
                                        fontFamily: "var(--body-sm-font-family)",
                                    }}
                                >
                                    Latest transactions from your store
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[12px] font-medium transition-colors hover:bg-neutral-50"
                                    style={{
                                        borderColor: "var(--border-200)",
                                        color: "var(--neutral-700)",
                                        fontFamily: "var(--label-md-font-family)",
                                    }}
                                >
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="4" y1="6" x2="20" y2="6" />
                                        <line x1="8" y1="12" x2="16" y2="12" />
                                        <line x1="11" y1="18" x2="13" y2="18" />
                                    </svg>
                                    Filter
                                </button>
                                <button
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium text-white transition-colors"
                                    style={{
                                        backgroundColor: "var(--primarysource)",
                                        fontFamily: "var(--label-md-font-family)",
                                    }}
                                >
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                    Export
                                </button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr style={{ backgroundColor: "var(--neutral-50)" }}>
                                        {[
                                            "Order ID",
                                            "Customer",
                                            "Product",
                                            "Date",
                                            "Amount",
                                            "Status",
                                            "Action",
                                        ].map((header) => (
                                            <th
                                                key={header}
                                                className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider"
                                                style={{
                                                    color: "var(--neutral-500)",
                                                    fontFamily: "var(--label-sm-font-family)",
                                                    borderBottom: "1px solid var(--border-100)",
                                                }}
                                            >
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentOrders.map((order, index) => (
                                        <tr
                                            key={order.id}
                                            className="hover:bg-neutral-50 transition-colors"
                                            style={{
                                                borderBottom:
                                                    index < recentOrders.length - 1
                                                        ? "1px solid var(--border-50)"
                                                        : "none",
                                            }}
                                        >
                                            <td className="px-5 py-3.5">
                                                <span
                                                    className="text-[13px] font-semibold"
                                                    style={{
                                                        color: "var(--primarysource)",
                                                        fontFamily: "var(--label-lg-font-family)",
                                                    }}
                                                >
                                                    {order.id}
                                                </span>
                                            </td>
                                            <td className="px-5 py-3.5">
                                                <div className="flex items-center gap-2.5">
                                                    <div
                                                        className="flex items-center justify-center w-7 h-7 rounded-full text-white text-[10px] font-bold flex-shrink-0"
                                                        style={{
                                                            backgroundColor: "var(--primarysource)",
                                                            opacity: 0.7 + (index % 3) * 0.1,
                                                        }}
                                                    >
                                                        {order.customer
                                                            .split(" ")
                                                            .map((n) => n[0])
                                                            .join("")}
                                                    </div>
                                                    <span
                                                        className="text-[13px] font-medium"
                                                        style={{
                                                            color: "var(--textdark)",
                                                            fontFamily: "var(--title-sm-font-family)",
                                                        }}
                                                    >
                                                        {order.customer}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-5 py-3.5">
                                                <span
                                                    className="text-[13px]"
                                                    style={{
                                                        color: "var(--neutral-700)",
                                                        fontFamily: "var(--body-sm-font-family)",
                                                    }}
                                                >
                                                    {order.product}
                                                </span>
                                            </td>
                                            <td className="px-5 py-3.5">
                                                <span
                                                    className="text-[13px]"
                                                    style={{
                                                        color: "var(--texthint)",
                                                        fontFamily: "var(--body-sm-font-family)",
                                                    }}
                                                >
                                                    {order.date}
                                                </span>
                                            </td>
                                            <td className="px-5 py-3.5">
                                                <span
                                                    className="text-[13px] font-semibold"
                                                    style={{
                                                        color: "var(--textdark)",
                                                        fontFamily: "var(--label-lg-font-family)",
                                                    }}
                                                >
                                                    {order.amount}
                                                </span>
                                            </td>
                                            <td className="px-5 py-3.5">
                                                <span
                                                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold ${statusColors[order.status]}`}
                                                    style={{ fontFamily: "var(--label-sm-font-family)" }}
                                                >
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="px-5 py-3.5">
                                                <div className="flex items-center gap-1">
                                                    <button
                                                        className="flex items-center justify-center w-7 h-7 rounded-lg hover:bg-primary-50 transition-colors"
                                                        style={{ color: "var(--primarysource)" }}
                                                        title="View"
                                                    >
                                                        <svg
                                                            width="14"
                                                            height="14"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                            <circle cx="12" cy="12" r="3" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        className="flex items-center justify-center w-7 h-7 rounded-lg hover:bg-neutral-50 transition-colors"
                                                        style={{ color: "var(--neutral-500)" }}
                                                        title="More"
                                                    >
                                                        <svg
                                                            width="14"
                                                            height="14"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <circle cx="12" cy="12" r="1" />
                                                            <circle cx="19" cy="12" r="1" />
                                                            <circle cx="5" cy="12" r="1" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Table Footer */}
                        <div
                            className="flex items-center justify-between px-5 py-3.5 border-t"
                            style={{ borderColor: "var(--border-100)" }}
                        >
                            <span
                                className="text-[12px]"
                                style={{
                                    color: "var(--texthint)",
                                    fontFamily: "var(--body-sm-font-family)",
                                }}
                            >
                                Showing 1–7 of 3,842 orders
                            </span>
                            <div className="flex items-center gap-1">
                                {["←", "1", "2", "3", "...", "48", "→"].map((page, i) => (
                                    <button
                                        key={i}
                                        className={`flex items-center justify-center w-7 h-7 rounded-lg text-[12px] font-medium transition-colors ${page === "1" ? "text-white" : "hover:bg-neutral-50"
                                            }`}
                                        style={
                                            page === "1"
                                                ? {
                                                    backgroundColor: "var(--primarysource)",
                                                    fontFamily: "var(--label-md-font-family)",
                                                }
                                                : {
                                                    color: "var(--neutral-600)",
                                                    fontFamily: "var(--label-md-font-family)",
                                                }
                                        }
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Activity + Quick Actions */}
                    <div className="grid grid-cols-3 gap-4 pb-2">
                        {/* Activity Feed */}
                        <div
                            className="col-span-2 flex flex-col gap-3 p-5 bg-white rounded-xl border"
                            style={{ borderColor: "var(--border-100)" }}
                        >
                            <div className="flex items-center justify-between">
                                <h2
                                    className="text-[16px] font-semibold"
                                    style={{
                                        color: "var(--textdark)",
                                        fontFamily: "var(--heading-xs-font-family)",
                                    }}
                                >
                                    Recent Activity
                                </h2>
                                <button
                                    className="text-[12px] font-medium"
                                    style={{
                                        color: "var(--primarysource)",
                                        fontFamily: "var(--label-md-font-family)",
                                    }}
                                >
                                    View all
                                </button>
                            </div>
                            <div className="flex flex-col gap-0">
                                {activityFeed.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="flex items-start gap-3 py-3"
                                        style={{
                                            borderBottom:
                                                index < activityFeed.length - 1
                                                    ? "1px solid var(--border-50)"
                                                    : "none",
                                        }}
                                    >
                                        <div
                                            className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${item.color}`}
                                        />
                                        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                                            <p
                                                className="text-[13px]"
                                                style={{
                                                    color: "var(--textdark)",
                                                    fontFamily: "var(--body-sm-font-family)",
                                                }}
                                            >
                                                {item.message}
                                            </p>
                                        </div>
                                        <span
                                            className="text-[11px] flex-shrink-0"
                                            style={{
                                                color: "var(--texthint)",
                                                fontFamily: "var(--body-sm-font-family)",
                                            }}
                                        >
                                            {item.time}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div
                            className="flex flex-col gap-4 p-5 bg-white rounded-xl border"
                            style={{ borderColor: "var(--border-100)" }}
                        >
                            <h2
                                className="text-[16px] font-semibold"
                                style={{
                                    color: "var(--textdark)",
                                    fontFamily: "var(--heading-xs-font-family)",
                                }}
                            >
                                Quick Actions
                            </h2>
                            <div className="flex flex-col gap-2">
                                {[
                                    {
                                        label: "Create New Order",
                                        icon: "➕",
                                        color: "var(--primarysource)",
                                        bg: "var(--primary-50)",
                                    },
                                    {
                                        label: "Add Customer",
                                        icon: "👤",
                                        color: "var(--textsuccess)",
                                        bg: "rgba(41,163,122,0.08)",
                                    },
                                    {
                                        label: "Generate Report",
                                        icon: "📊",
                                        color: "var(--textwarning)",
                                        bg: "rgba(225,166,19,0.08)",
                                    },
                                    {
                                        label: "Manage Products",
                                        icon: "📦",
                                        color: "var(--texterror)",
                                        bg: "rgba(237,19,28,0.08)",
                                    },
                                ].map((action) => (
                                    <button
                                        key={action.label}
                                        className="flex items-center gap-3 px-4 py-3 rounded-lg border text-left transition-all hover:shadow-sm"
                                        style={{ borderColor: "var(--border-100)" }}
                                    >
                                        <div
                                            className="flex items-center justify-center w-8 h-8 rounded-lg text-[16px]"
                                            style={{ backgroundColor: action.bg }}
                                        >
                                            {action.icon}
                                        </div>
                                        <span
                                            className="text-[13px] font-medium"
                                            style={{
                                                color: "var(--textdark)",
                                                fontFamily: "var(--title-sm-font-family)",
                                            }}
                                        >
                                            {action.label}
                                        </span>
                                        <svg
                                            className="ml-auto"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            style={{ color: "var(--neutral-400)" }}
                                        >
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </button>
                                ))}
                            </div>

                            {/* Summary Card */}
                            <div
                                className="flex flex-col gap-2 p-4 rounded-xl mt-1"
                                style={{ backgroundColor: "var(--primary-50)" }}
                            >
                                <div className="flex items-center justify-between">
                                    <span
                                        className="text-[12px] font-semibold"
                                        style={{
                                            color: "var(--primary-700)",
                                            fontFamily: "var(--label-md-font-family)",
                                        }}
                                    >
                                        Monthly Goal
                                    </span>
                                    <span
                                        className="text-[12px] font-bold"
                                        style={{ color: "var(--primarysource)" }}
                                    >
                                        78%
                                    </span>
                                </div>
                                <div
                                    className="w-full h-2 rounded-full"
                                    style={{ backgroundColor: "var(--primary-200)" }}
                                >
                                    <div
                                        className="h-full rounded-full"
                                        style={{
                                            width: "78%",
                                            backgroundColor: "var(--primarysource)",
                                        }}
                                    />
                                </div>
                                <p
                                    className="text-[11px]"
                                    style={{
                                        color: "var(--primary-700)",
                                        fontFamily: "var(--body-sm-font-family)",
                                    }}
                                >
                                    $48,295 of $62,000 target reached
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Click outside to close dropdowns */}
            {(notificationsOpen || profileOpen) && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => {
                        setNotificationsOpen(false);
                        setProfileOpen(false);
                    }}
                />
            )}
        </div>
    );
};

export default Box;
