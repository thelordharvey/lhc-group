import { test, expect } from "bun:test";
import { proofAttachments } from "./proof-attachments";
import { coachingCaseStudies } from "./coaching-case-studies";

test("the ten tailored strategy access proofs include the live-session reactions", () => {
  expect(proofAttachments).toHaveLength(10);
  expect(proofAttachments.every((proof) => proof.program === "tailored")).toBe(true);
  expect(proofAttachments.at(-1).title).toBe("Reactions to a live session");
});

test("five one-on-one case studies pair Mike with his result, Harry with his progress and keep the FTMO milestone standalone", () => {
  expect(coachingCaseStudies).toHaveLength(5);
  expect(coachingCaseStudies.map((proof) => proof.id)).toEqual(["mike", "mike-result", "harry", "harry-progress", "ftmo-milestone"]);
  expect(coachingCaseStudies.every((proof) => proof.program === "one-on-one")).toBe(true);
});