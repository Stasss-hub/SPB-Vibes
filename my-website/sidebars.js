/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Архитектура',
      items: ['architecture/overview'],
    },
    {
      type: 'category',
      label: 'API',
      items: ['api/openapi'],
    },
    {
      type: 'category',
      label: 'Диаграммы',
      items: ['diagrams/use-case', 'diagrams/bpmn', 'diagrams/erd'],
    },
    'deployment',
    'testing',
    'roadmap',
  ],
};

export default sidebars;