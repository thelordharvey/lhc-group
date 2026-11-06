import { test, expect } from "bun:test";
import { proofAttachments } from "./proof-attachments";
import { coachingCaseStudies } from "./coaching-case-studies";

test("the nine previous attachments belong to tailored strategy access", () => {
  expect(proofAttachments).toHaveLength(9);
  expect(proofAttachments.every((proof) => proof.program === "tailored")).toBe(true);
});

test("all five newly supplied attachments belong to one-on-one coaching", () => {
  expect(coachingCaseStudies).toHaveLength(5);
  expect(coachingCaseStudies.map((proof) => proof.id)).toEqual(["strategy", "perspective", "execution", "live", "learning"]);
  expect(coachingCaseStudies.every((proof) => proof.program === "one-on-one")).toBe(true);
});