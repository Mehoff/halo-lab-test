import { createClient } from "redis";

export const redis = createClient({
  url: "redis://:@redis:6379",
});

export const setupRedis = async () => {
  redis.on("error", (err) => {
    console.error("Redis Error: ", err);
  });

  await redis.connect();
};
