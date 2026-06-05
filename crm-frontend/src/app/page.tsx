"use client";

import { Box, Button, Typography, Grid2 as Grid } from "@mui/material";
import { useRouter } from "next/navigation";

const features = [
  {
    icon: "👥",
    title: "Lead Management",
    desc: "Track and nurture leads through every stage of your sales pipeline.",
  },
  {
    icon: "🤝",
    title: "Deal Tracking",
    desc: "Monitor deals in real-time and close faster with smart insights.",
  },
  {
    icon: "🏢",
    title: "Company Profiles",
    desc: "Maintain detailed company records with activity history.",
  },
  {
    icon: "🎫",
    title: "Ticket Support",
    desc: "Handle customer support tickets efficiently in one place.",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    desc: "Get actionable insights with real-time reports and metrics.",
  },
  {
    icon: "🔔",
    title: "Smart Notifications",
    desc: "Stay on top of every activity with instant notifications.",
  },
];

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "50K+", label: "Deals Closed" },
  { value: "24/7", label: "Support" },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f8f7ff" }}>

      {/* ── Navbar ── */}
      <Box sx={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        px: { xs: 3, md: 8 }, py: 2, bgcolor: "white",
        borderBottom: "1px solid #ede9fe",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{
            width: 36, height: 36, borderRadius: 2,
            bgcolor: "#6c63ff", display: "flex",
            alignItems: "center", justifyContent: "center",
          }}>
            <Typography sx={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>C</Typography>
          </Box>
          <Typography sx={{ fontWeight: 800, fontSize: 22, color: "#6c63ff" }}>
            CRM
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            onClick={() => router.push("/login")}
            sx={{
              textTransform: "none", borderRadius: 2,
              borderColor: "#6c63ff", color: "#6c63ff",
              fontWeight: 600,
              "&:hover": { bgcolor: "#f3f0ff" }
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            onClick={() => router.push("/register")}
            sx={{
              textTransform: "none", borderRadius: 2,
              bgcolor: "#6c63ff", fontWeight: 600,
              "&:hover": { bgcolor: "#5a52d5" }
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>

      {/* ── Hero Section ── */}
      <Box sx={{
        position: "relative",
        overflow: "hidden",
        px: { xs: 3, md: 8 },
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 10 },
        textAlign: "center",
      }}>
        {/* Background circles */}
        <Box sx={{
          position: "absolute", top: -100, left: -100,
          width: 400, height: 400, borderRadius: "50%",
          bgcolor: "#ede9fe", opacity: 0.5, zIndex: 0,
        }} />
        <Box sx={{
          position: "absolute", bottom: -100, right: -100,
          width: 500, height: 500, borderRadius: "50%",
          bgcolor: "#ede9fe", opacity: 0.4, zIndex: 0,
        }} />
        <Box sx={{
          position: "absolute", top: "30%", right: "10%",
          width: 200, height: 200, borderRadius: "50%",
          bgcolor: "#c7d2fe", opacity: 0.3, zIndex: 0,
        }} />

        <Box sx={{ position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <Box sx={{
            display: "inline-block",
            bgcolor: "#ede9fe", color: "#6c63ff",
            px: 2, py: 0.5, borderRadius: 5,
            fontSize: 13, fontWeight: 600, mb: 3,
            border: "1px solid #c4b5fd",
          }}>
            🚀 The #1 CRM Platform for Modern Teams
          </Box>

          <Typography sx={{
            fontSize: { xs: 36, md: 60 },
            fontWeight: 800, color: "#1a1a2e",
            lineHeight: 1.15, mb: 3,
          }}>
            Manage Your Customers
            <br />
            <span style={{
              color: "#6c63ff",
              background: "linear-gradient(135deg, #6c63ff, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Smarter & Faster
            </span>
          </Typography>

          <Typography sx={{
            fontSize: { xs: 16, md: 20 }, color: "#555",
            maxWidth: 600, mx: "auto", mb: 5, lineHeight: 1.8,
          }}>
            A powerful CRM platform to track leads, manage deals,
            and grow your business — all in one place.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap", mb: 3 }}>
            <Button
              variant="contained"
              onClick={() => router.push("/register")}
              sx={{
                textTransform: "none", borderRadius: 2,
                bgcolor: "#6c63ff", fontWeight: 700,
                px: 5, py: 1.8, fontSize: 16,
                boxShadow: "0 8px 24px rgba(108,99,255,0.35)",
                "&:hover": { bgcolor: "#5a52d5", boxShadow: "0 12px 28px rgba(108,99,255,0.45)" }
              }}
            >
              Get Started Free →
            </Button>
            <Button
              variant="outlined"
              onClick={() => router.push("/login")}
              sx={{
                textTransform: "none", borderRadius: 2,
                borderColor: "#6c63ff", color: "#6c63ff",
                fontWeight: 600, px: 5, py: 1.8, fontSize: 16,
                "&:hover": { bgcolor: "#f3f0ff" }
              }}
            >
              Login
            </Button>
          </Box>

          <Typography sx={{ fontSize: 13, color: "#888" }}>
            ✓ No credit card required &nbsp; ✓ Free 14-day trial &nbsp; ✓ Cancel anytime
          </Typography>
        </Box>
      </Box>

      {/* ── Stats Section ── */}
      <Box sx={{
        bgcolor: "#6c63ff",
        py: { xs: 5, md: 6 },
        px: { xs: 3, md: 8 },
      }}>
        <Grid container spacing={3} justifyContent="center">
          {stats.map((stat) => (
            <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ fontSize: { xs: 32, md: 42 }, fontWeight: 800, color: "#fff" }}>
                  {stat.value}
                </Typography>
                <Typography sx={{ fontSize: 15, color: "#c4b5fd", fontWeight: 500 }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ── Features Section ── */}
      <Box sx={{ px: { xs: 3, md: 8 }, py: { xs: 8, md: 10 } }}>
        <Typography sx={{
          textAlign: "center", fontSize: { xs: 28, md: 40 },
          fontWeight: 800, color: "#1a1a2e", mb: 2,
        }}>
          Everything You Need to
          <span style={{ color: "#6c63ff" }}> Grow Faster</span>
        </Typography>
        <Typography sx={{
          textAlign: "center", fontSize: 16, color: "#666",
          maxWidth: 500, mx: "auto", mb: 6, lineHeight: 1.8,
        }}>
          All your customer management tools in one powerful platform.
        </Typography>

        <Grid container spacing={3}>
          {features.map((feature) => (
            <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box sx={{
                bgcolor: "#fff",
                borderRadius: 3,
                p: 3.5,
                height: "100%",
                border: "1px solid #ede9fe",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "#6c63ff",
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 32px rgba(108,99,255,0.12)",
                },
              }}>
                <Box sx={{
                  width: 52, height: 52, borderRadius: 2,
                  bgcolor: "#f3f0ff",
                  display: "flex", alignItems: "center",
                  justifyContent: "center", mb: 2, fontSize: 24,
                }}>
                  {feature.icon}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: 17, color: "#1a1a2e", mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography sx={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>
                  {feature.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ── CTA Section ── */}
      <Box sx={{
        mx: { xs: 3, md: 8 },
        mb: { xs: 6, md: 10 },
        bgcolor: "#6c63ff",
        borderRadius: 4,
        p: { xs: 5, md: 8 },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <Box sx={{
          position: "absolute", top: -60, right: -60,
          width: 250, height: 250, borderRadius: "50%",
          bgcolor: "rgba(255,255,255,0.08)",
        }} />
        <Box sx={{
          position: "absolute", bottom: -80, left: -40,
          width: 300, height: 300, borderRadius: "50%",
          bgcolor: "rgba(255,255,255,0.06)",
        }} />
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography sx={{
            fontSize: { xs: 28, md: 42 },
            fontWeight: 800, color: "#fff", mb: 2,
          }}>
            Ready to Get Started?
          </Typography>
          <Typography sx={{
            fontSize: 17, color: "#c4b5fd", mb: 4, lineHeight: 1.8,
          }}>
            Join thousands of businesses already using our CRM
            to manage their customers better.
          </Typography>
          <Button
            variant="contained"
            onClick={() => router.push("/register")}
            sx={{
              textTransform: "none", borderRadius: 2,
              bgcolor: "#fff", color: "#6c63ff",
              fontWeight: 700, px: 5, py: 1.8, fontSize: 16,
              "&:hover": { bgcolor: "#f3f0ff" }
            }}
          >
            Start Free Trial →
          </Button>
        </Box>
      </Box>

      {/* ── Footer ── */}
      <Box sx={{
        borderTop: "1px solid #ede9fe",
        py: 3, px: { xs: 3, md: 8 },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
      }}>
        <Typography sx={{ fontWeight: 800, fontSize: 18, color: "#6c63ff" }}>CRM</Typography>
        <Typography sx={{ fontSize: 13, color: "#888" }}>
          © 2026 CRM Platform. All rights reserved.
        </Typography>
      </Box>

    </Box>
  );
}