export type Service = {
  id: string;
  name: string;
  description: string;
  engagements: string;
};

export const services: Service[] = [
  {
    id: "creative-consulting",
    name: "Creative Consulting",
    description:
      "Fractional creative leadership for brands navigating launches, campaigns, and brand evolution.",
    engagements: "Brand evolutions, launch direction, campaign systems, fractional creative leadership.",
  },
  {
    id: "editorial-production",
    name: "Editorial Production",
    description:
      "Long-form features and campaign editorial produced to design publication standard.",
    engagements: "Magazine features, brand publications, campaign editorial, long-form brand storytelling.",
  },
  {
    id: "concept-development",
    name: "Concept Development",
    description:
      "Idea generation for campaigns, launches, exhibitions, and brand moments.",
    engagements: "Campaign concepts, launch ideas, exhibition concepts, brand moments.",
  },
  {
    id: "editorial-consultancy",
    name: "Editorial Consultancy",
    description: "Helping brands build and run their own editorial properties.",
    engagements: "Brand magazines, content platforms, editorial standards, masthead structure.",
  },
  {
    id: "events-and-activations",
    name: "Events and Activations",
    description:
      "Programming during design weeks, dinners, talks, and brand activations at fairs.",
    engagements: "Design week programming, dinners, panel talks, fair activations.",
  },
  {
    id: "environmental-design",
    name: "Environmental Design",
    description: "Showroom, exhibition, and retail spatial concepts.",
    engagements: "Showrooms, exhibitions, retail concepts, fair installations.",
  },
  {
    id: "publishing",
    name: "Publishing",
    description: "Books, special issues, limited editions, custom publications.",
    engagements: "Books, special issues, limited editions, custom publications.",
  },
  {
    id: "digital",
    name: "Digital",
    description: "Brand microsites, digital editorial experiences, content platforms.",
    engagements: "Brand microsites, digital editorial, content platforms, archives.",
  },
];
