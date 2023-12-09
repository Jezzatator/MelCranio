"use client";

import React from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { useRouter } from "next/navigation";

const SupaURL: string =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "valeur_par_defaut";
const SupaKey: string =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "valeur_par_defaut";

const supabase = createClient(SupaURL, SupaKey);

const Login = () => {
  const router = useRouter();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event !== "SIGNED_OUT") {
      router.push("/admin");
    } else {
      router.push("/");
    }
  });

  return (
    <div>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
      />
    </div>
  );
};

export default Login;
