import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Hexagon, Code, BookOpen, Lightbulb } from 'lucide-react';

const AngularCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData = [
        {
            id: 'angular-intro',
            title: 'Angular Intro',
            definition: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.',
            example: 'Angular is used by Google, Microsoft, and many other large companies for their web applications.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces with Angular.
                    </p>
                </>
            ),
            codeSnippet: null
        },
        {
            id: 'angular-cli',
            title: 'Angular CLI',
            definition: 'The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications.',
            example: 'ng new my-app creates a new Angular application.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can use the tool directly in a command shell, or indirectly through an interactive UI such as Angular Console.
                    </p>
                </>
            ),
            codeSnippet: `npm install -g @angular/cli
ng new my-app
cd my-app
ng serve --open`
        },
        {
            id: 'angular-components',
            title: 'Angular Components',
            definition: 'Components are the main building block for Angular applications.',
            example: 'A component controls a patch of screen called a view.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Each component consists of: A HTML template, A TypeScript class, A CSS selector, and CSS styles.
                    </p>
                </>
            ),
            codeSnippet: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}`
        },
        {
            id: 'angular-templates',
            title: 'Angular Templates',
            definition: 'Each component has an HTML template that declares how that component renders.',
            example: '<h1>{{ title }}</h1> displays the title property.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You define this template either inline or by file path. Angular extends HTML with additional syntax that lets you insert dynamic values from your component.
                    </p>
                </>
            ),
            codeSnippet: `<h1>{{ title }}</h1>
<p>My first Angular component!</p>`
        },
        {
            id: 'angular-directives',
            title: 'Angular Directives',
            definition: 'Directives are classes that add additional behavior to elements in your Angular applications.',
            example: '*ngIf conditionally includes an element.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        With Angular's built-in directives, you can manage forms, lists, styles, and what users see.
                    </p>
                </>
            ),
            codeSnippet: `<p *ngIf="showText">Text is visible</p>
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>`
        },
        {
            id: 'angular-dependency-injection',
            title: 'Angular Dependency Injection',
            definition: 'Dependency injection (DI) is a design pattern in which a class requests dependencies from external sources rather than creating them.',
            example: 'Injecting a service into a component constructor.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Angular's DI framework provides dependencies to a class upon instantiation. You can use it to make your apps flexible and efficient.
                    </p>
                </>
            ),
            codeSnippet: `constructor(private heroService: HeroService) { }`
        },
        {
            id: 'angular-services',
            title: 'Angular Services',
            definition: 'Service is a broad category encompassing any value, function, or feature that an application needs.',
            example: 'A HeroService that fetches data from a server.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.
                    </p>
                </>
            ),
            codeSnippet: `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() { }
}`
        },
        {
            id: 'angular-routing',
            title: 'Angular Routing',
            definition: 'The Angular Router enables navigation from one view to the next as users perform application tasks.',
            example: 'Navigating to /heroes displays the HeroesComponent.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can configure routes to connect URL paths with components.
                    </p>
                </>
            ),
            codeSnippet: `const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];`
        },
        {
            id: 'angular-forms',
            title: 'Angular Forms',
            definition: 'Angular provides two different approaches to handling user input through forms: Reactive and Template-driven.',
            example: 'Using [(ngModel)] for two-way data binding.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Both capture user input events from the view, validate the user input, create a form model and data model to update, and provide a way to track changes.
                    </p>
                </>
            ),
            codeSnippet: `<input [(ngModel)]="hero.name" placeholder="name">`
        },
        {
            id: 'angular-http',
            title: 'Angular HTTP',
            definition: 'Most front-end applications need to communicate with a server over the HTTP protocol.',
            example: 'Using HttpClient to fetch data.',
            content: (
                <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Angular provides a client HTTP API that enables you to perform HTTP requests.
                    </p>
                </>
            ),
            codeSnippet: `this.http.get('/api/heroes').subscribe(data => {
  this.heroes = data;
});`
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    const CodeBlock = ({ code, lang = 'typescript' }: { code: string, lang?: string }) => (
        <div className="bg-[#1e1e1e] text-gray-200 p-6 rounded-2xl font-mono text-sm mb-6 overflow-x-auto shadow-xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-sans">{lang === 'typescript' ? 'app.component.ts' : 'app.component.html'}</span>
            </div>
            <pre className="leading-relaxed text-red-300">{code}</pre>
        </div>
    );

    return (
        <CoursePageLayout
            title="Angular Tutorial"
            description="Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces with Angular."
            topics={topics}
            icon={Hexagon}
            colorClass="red"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Definition Section */}
                <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-2 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Definition
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {activeTopic.definition}
                    </p>
                </div>

                {/* Real-time Example Section */}
                <div className="bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-600 p-6 rounded-r-xl">
                    <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-300 mb-2 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        Real-time Example
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {activeTopic.example}
                    </p>
                </div>

                {/* Main Content & Code */}
                <div className="prose dark:prose-invert max-w-none">
                    {activeTopic.content}

                    {activeTopic.codeSnippet && (
                        <div className="mt-8">
                            <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800 dark:text-white">
                                <Code className="w-6 h-6 mr-2 text-red-600" />
                                Code Example
                            </h3>
                            <CodeBlock code={activeTopic.codeSnippet} />
                        </div>
                    )}
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default AngularCoursePage;
