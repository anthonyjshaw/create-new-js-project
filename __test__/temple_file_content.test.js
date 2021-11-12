const templateFileContent = require('../lib/template_file_content');

describe('templateFileContent', () => {
    test('should return object of strings' ,() => {
        expect(typeof templateFileContent('project_name')).toBe('object');
    });

    test('test and function files should convert project name to camelCase', () => {
        expect(templateFileContent('project_name').test).toBe(
`const projectName = require('../lib/project_name');

// Add your test suites here
describe('', () => {\n
  test('should ', () => {
    expect(projectName()).toBe(0);
  });
});`);
    });
});