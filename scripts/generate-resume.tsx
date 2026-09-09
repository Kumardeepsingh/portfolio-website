import { writeFileSync } from "node:fs";
import path from "node:path";
import { Document, Page, Text, View, StyleSheet, renderToBuffer } from "@react-pdf/renderer";
import { siteConfig } from "../src/lib/site-config";
import { education } from "../src/data/education";
import { skillGroups } from "../src/data/skills";
import { projects } from "../src/data/projects";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#1a1a1a",
  },
  name: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
  },
  contactLine: {
    marginTop: 4,
    fontSize: 9.5,
    color: "#333333",
  },
  section: {
    marginTop: 16,
  },
  sectionHeading: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#999999",
    paddingBottom: 3,
    marginBottom: 6,
  },
  degree: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
  },
  muted: {
    color: "#444444",
    marginTop: 2,
  },
  skillRow: {
    marginBottom: 3,
  },
  skillCategory: {
    fontFamily: "Helvetica-Bold",
  },
  project: {
    marginBottom: 8,
  },
  projectName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5,
  },
  projectTech: {
    marginTop: 2,
    color: "#444444",
    fontSize: 9,
  },
});

function ResumeDocument() {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.name}>{siteConfig.name}</Text>
        <Text style={styles.contactLine}>
          {siteConfig.location} | {siteConfig.email} | {siteConfig.github}
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Education</Text>
          <Text style={styles.degree}>{education.degree}</Text>
          <Text style={styles.muted}>
            {education.institution}, {education.location} - {education.expected}
          </Text>
          <Text style={styles.muted}>
            GPA {education.gpa} - {education.honors}
          </Text>
          <Text style={styles.muted}>
            Relevant Coursework: {education.coursework.join(", ")}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Skills</Text>
          {skillGroups.map((group) => (
            <Text key={group.category} style={styles.skillRow}>
              <Text style={styles.skillCategory}>{group.category}: </Text>
              {group.skills.join(", ")}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Projects</Text>
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <View key={project.slug} style={styles.project}>
                <Text style={styles.projectName}>{project.name}</Text>
                <Text style={styles.muted}>{project.oneLiner}</Text>
                <Text style={styles.projectTech}>{project.techStack.join(", ")}</Text>
              </View>
            ))}
        </View>
      </Page>
    </Document>
  );
}

async function main() {
  const buffer = await renderToBuffer(<ResumeDocument />);
  const outPath = path.resolve(__dirname, "../public/resume.pdf");
  writeFileSync(outPath, buffer);
  console.log(`Resume written to ${outPath}`);
}

main();
