// react-icons imports are resolved in the Skills component.
// Each skill object carries an iconName string mapped to the icon in the component.

const skills = [
  {
    category: 'Languages',
    icon: 'code',
    color: '#f7df1e',
    items: [
      { name: 'Java',       iconName: 'FaJava',       level: 85 },
      { name: 'JavaScript', iconName: 'IoLogoJavascript', level: 80 },
      { name: 'SQL',        iconName: 'FaDatabase',   level: 75 },
    ],
  },
  {
    category: 'Frontend',
    icon: 'monitor',
    color: '#61dafb',
    items: [
      { name: 'React.js',   iconName: 'FaReact',      level: 82 },
      { name: 'HTML5',      iconName: 'FaHtml5',      level: 90 },
      { name: 'CSS3',       iconName: 'FaCss3Alt',    level: 88 },
      { name: 'Bootstrap',  iconName: 'FaBootstrap',  level: 80 },
    ],
  },
  {
    category: 'Backend',
    icon: 'server',
    color: '#6db33f',
    items: [
      { name: 'Spring Boot', iconName: 'SiSpringboot', level: 80 },
      { name: 'Node.js',     iconName: 'FaNodeJs',    level: 78 },
      { name: 'Express.js',  iconName: 'SiExpress',   level: 75 },
      { name: 'REST APIs',   iconName: 'TbApi',       level: 85 },
    ],
  },
  {
    category: 'Database',
    icon: 'database',
    color: '#4479a1',
    items: [
      { name: 'MySQL',      iconName: 'SiMysql',      level: 80 },
      { name: 'MongoDB',    iconName: 'SiMongodb',    level: 70 },
      { name: 'SQL Server', iconName: 'FaDatabase',   level: 72 },
    ],
  },
  {
    category: 'Tools',
    icon: 'tools',
    color: '#f05032',
    items: [
      { name: 'Git',          iconName: 'FaGit',        level: 85 },
      { name: 'GitHub',       iconName: 'FaGithub',     level: 85 },
      { name: 'VS Code',      iconName: 'VscVscode',    level: 90 },
      { name: 'IntelliJ IDEA',iconName: 'SiIntellijidea',level: 80 },
      { name: 'Postman',      iconName: 'SiPostman',    level: 80 },
      { name: 'Jira',         iconName: 'FaJira',       level: 70 },
    ],
  },
  {
    category: 'Concepts',
    icon: 'lightbulb',
    color: '#a89cff',
    items: [
      { name: 'OOP',   iconName: 'FaCode', level: 88 },
      { name: 'DSA',   iconName: 'FaCode', level: 80 },
      { name: 'MVC',   iconName: 'FaCode', level: 85 },
      { name: 'SDLC',  iconName: 'FaCode', level: 82 },
      { name: 'Scrum', iconName: 'FaCode', level: 78 },
      { name: 'JDBC',  iconName: 'FaCode', level: 75 },
    ],
  },
];

export default skills;
