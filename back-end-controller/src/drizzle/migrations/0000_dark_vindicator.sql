CREATE TABLE "furia_fas" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"image" text NOT NULL,
	"name" text NOT NULL,
	"nickname" text NOT NULL,
	"age" integer DEFAULT 0 NOT NULL,
	"twitter" text NOT NULL,
	"city_and_state" text NOT NULL,
	"game" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
