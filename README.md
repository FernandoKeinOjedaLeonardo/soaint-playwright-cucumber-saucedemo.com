<img width="1569" height="1018" alt="image" src="https://github.com/user-attachments/assets/9212e21d-e939-4e75-ba95-0815fd62fa0e" /># Reto de Automatización QA - FrontEnd | Playwright + Cucumber
Web de pruebas: https://www.saucedemo.com/

Instrucciones de configuraciones
1. Node.js 18+ (recomendado 20 LTS)
2. Visual Studio Code
3. Extensiones en el IDE: Cucumber, Playwright Test for VSCode
4. Instalar en el cmd npm i -D multiple-cucumber-html-reporter
5. Clonar el repositorio
6. Ejecutar en el CLI npm install

Instrucciones de ejecución
1. Todos los features:
- Configurar src\test\cucumber.json (paths configurados a "src/test/features").
- Ejecutar en el CLI: npm run test:report

2. Por feature específico:
- Ajusta el path del runner a "src/test/features/login.feature" y ejecútalo.
- Ejecutar en el CLI: npm run test:report

Reporte:
El reporte se genera después de la ejecución en la ruta reports\html\index.html
