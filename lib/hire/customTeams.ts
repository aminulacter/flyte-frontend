import type { CustomTeam } from "@/lib/types";

const CUSTOM_TEAMS_ASSETS = "/images/hire/custom-teams";

export const CUSTOM_TEAMS: CustomTeam[] = [
    {
        title: "Team Size Options",
        description: "Scale your team from one developer to a full team, tailored to your project's needs.",
        icon: { src: `${CUSTOM_TEAMS_ASSETS}/people-team.svg`, width: 40, height: 40 },
        checkIcon: `${CUSTOM_TEAMS_ASSETS}/check-circle-team-size.svg`,
        labels: [
            { title: "Individual Developers" },
            { title: "Dedicated Teams" },
            { title: "Scalable Solutions" },
        ],
        mostPopular: false,
    },
    {
        title: "Customizable Teams",
        description:
            "Mix and match developers of different experience levels to create a team that fits your budget and project complexity.",
        icon: { src: `${CUSTOM_TEAMS_ASSETS}/gear.svg`, width: 40, height: 37.4919 },
        labels: [],
        mostPopular: true,
    },
    {
        title: "Experience Levels",
        description: "Select junior, mid-level, or senior developers for the perfect mix of skill and affordability.",
        icon: { src: `${CUSTOM_TEAMS_ASSETS}/academic-cap.svg`, width: 40, height: 40 },
        checkIcon: `${CUSTOM_TEAMS_ASSETS}/check-circle-experience.svg`,
        labels: [
            { title: "Junior Developers" },
            { title: "Mid-Level Developers" },
            { title: "Senior Developers" },
        ],
        mostPopular: false,
    },
];

export function getCustomTeams(): CustomTeam[] {
    return CUSTOM_TEAMS;
}
