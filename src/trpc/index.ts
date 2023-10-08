import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { currentUser } from "@clerk/nextjs";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";

export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const user = await currentUser();
    if (!user?.id || !user.emailAddresses) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    const dbUser = await db.user.findFirst({
      where: {
        id: user.id,
      },
    });
    console.log("Email address: ", user.emailAddresses[0].emailAddress);
    console.log(dbUser);
    if (!dbUser) {
      await db.user.create({
        data: {
          id: user.id,
          email: user.emailAddresses[0].emailAddress,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      });
    }
    return { success: true };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
