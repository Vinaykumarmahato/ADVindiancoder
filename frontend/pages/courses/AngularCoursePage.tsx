import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Hexagon, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, ShieldAlert, Zap, Workflow, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface AngularTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const AngularCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: AngularTopic[] = [
        {
            id: 'angular-cli-architecture',
            title: '1. [Beginner] Architecture & CLI (Standalone Components)',
            definition: 'Angular is a Google-backed TypeScript framework. Angular CLI (`ng`) bootstraps component architectures. Modern Angular uses Standalone Components (`standalone: true`).',
            syntax: `# Angular CLI Development Workflow Commands:
$ npm install -g @angular/cli
$ ng new my-app --standalone --routing
$ cd my-app && ng serve --open`,
            codeSnippet: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
    <div className="container p-4">
      <h1 className="text-danger">{{ title }}</h1>
      <p>Angular Standalone Architecture Initialized.</p>
    </div>
  \`
})
export class AppComponent {
  title = 'ADV Indian Coder - Angular Masterclass';
}`,
            realLifeScenario: 'Enterprise banking dashboards (Google Cloud Console, Santander) use Angular for strict TypeScript contracts and structured CLI code generation.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Modern Angular relies heavily on the Angular CLI for scaffolding and uses Standalone Components to reduce boilerplate.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Think of the Angular CLI as an expert foreman on a construction site. Instead of building every brick yourself, you give a command like <code className="text-cyan-600 font-mono">ng generate component</code> and the foreman instantly sets up the room with walls, windows, and doors ready for you.</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-500" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n  CLI[Angular CLI] -->|ng new| App[New Application]\n  App --> Comp1[Standalone Component A]\n  App --> Comp2[Standalone Component B]\n  Comp1 --> TS1[TypeScript Logic]\n  Comp1 --> HTML1[HTML Template]\n  Comp1 --> CSS1[CSS Styles]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-orange-500" />Sample Code</h4>
                        <CodeBlock code={`// Basic Standalone Component\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-hello',\n  standalone: true,\n  template: '<h1>Hello Angular!</h1>'\n})\nexport class HelloComponent {}`} lang="typescript" filename="hello.component.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Large-scale enterprise apps like banking portals rely on Angular&apos;s CLI for consistent code structure across hundreds of developers.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Highly structured out-of-the-box framework.</li>
                            <li><code className="text-cyan-400">standalone: true</code> removes the need for complex NgModules.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Steep learning curve compared to React or Vue.</li>
                            <li>Heavy initial footprint for very simple apps.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'angular-components-templates',
            title: '2. [Beginner] Components & Template Data Binding',
            definition: 'Templates bind HTML markup with TypeScript code via Interpolation `{{}}`, Property Binding `[prop]`, Event Binding `(event)`, and Two-Way Binding `[(ngModel)]`.',
            syntax: `<!-- Binding Syntax Blueprint: -->
<p>{{ title }}</p>                         <!-- Interpolation -->
<img [src]="user.avatarUrl" />            <!-- Property Binding -->
<button (click)="save()">Save</button>     <!-- Event Binding -->
<input [(ngModel)]="username" />           <!-- Two-Way Binding -->`,
            codeSnippet: `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  template: \`
    <div className="p-4 border rounded-xl space-y-3">
      <h3>User Profile: {{ username }}</h3>
      <input [(ngModel)]="username" className="form-control" />
      <button [disabled]="!username" (click)="resetName()" className="btn btn-danger">
        Reset Name
      </button>
    </div>
  \`
})
export class UserProfileComponent {
  username = 'Vinay Mahato';
  resetName() { this.username = ''; }
}`,
            realLifeScenario: 'Form inputs use two-way data binding `[(ngModel)]` to sync template input changes automatically with TypeScript class properties.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Components are the UI building blocks. Data binding is how the TypeScript component communicates with the HTML template, allowing dynamic data updates and event handling natively.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Imagine data binding as a live television broadcast. Interpolation is a one-way broadcast to your TV. Two-way binding is like a video call where both you and the broadcaster can instantly see updates from each other.</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-500" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR\n  TS[TypeScript Class] -- Interpolation {{}} --> HTML[HTML Template]\n  TS -- Property Binding [] --> HTML\n  HTML -- Event Binding () --> TS\n  TS <-->|Two-Way Binding [()]| HTML`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-orange-500" />Sample Code</h4>
                        <CodeBlock code={`@Component({\n  template: '<input [(ngModel)]="name" /> <p>Hello {{name}}</p>'\n})\nexport class BindDemo {\n  name = 'World';\n}`} lang="typescript" filename="bind.component.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Live search inputs use two-way binding to immediately capture keystrokes and filter lists without manual DOM manipulation.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Eliminates manual DOM querying (<code className="text-cyan-400">document.getElementById</code>).</li>
                            <li>Clear, expressive template syntax.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Overuse of two-way binding can lead to confusing data flow.</li>
                            <li>Requires importing <code className="text-cyan-400">FormsModule</code> for <code className="text-cyan-400">[(ngModel)]</code>.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'angular-directives-control-flow',
            title: '3. [Beginner] Directives & Modern Control Flow (@if, @for)',
            definition: 'Directives modify DOM structure or behavior. Modern Angular (v17+) introduces built-in block Control Flow syntax (@if, @for, @switch), superseding legacy *ngIf and *ngFor.',
            syntax: `<!-- Modern Angular Control Flow Blueprint (v17+) -->
@if (isLoggedIn) {
  <app-dashboard />
} @else {
  <app-login />
}

@for (user of users; track user.id) {
  <div>{{ user.name }}</div>
}`,
            codeSnippet: `import { Component } from '@angular/core';

interface Product { id: number; title: string; price: number; }

@Component({
  selector: 'app-product-list',
  standalone: true,
  template: \`
    <div className="p-4 space-y-3">
      <h2>Products List</h2>
      
      @if (products.length > 0) {
        <ul className="list-group">
          @for (prod of products; track prod.id) {
            <li className="list-group-item d-flex justify-content-between">
              <span>{{ prod.title }}</span>
              <span className="badge bg-success">₹{{ prod.price }}</span>
            </li>
          }
        </ul>
      } @else {
        <p className="text-muted">No products found.</p>
      }
    </div>
  \`
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, title: 'Angular Masterclass', price: 1499 },
    { id: 2, title: 'TypeScript Deep Dive', price: 999 }
  ];
}`,
            realLifeScenario: 'Modern `@for (item of items; track item.id)` syntax optimizes template re-rendering speed without requiring custom `trackBy` functions.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Control flow allows rendering logic directly inside HTML templates. Angular 17+ uses the modern block syntax (<code className="text-cyan-600 font-mono">@if</code>, <code className="text-cyan-600 font-mono">@for</code>) which is cleaner and significantly faster than older directives like <code className="text-cyan-600 font-mono">*ngIf</code>.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Control flow is like a traffic cop at an intersection. <code className="text-cyan-600 font-mono">@if</code> decides whether cars (UI elements) can enter the screen, while <code className="text-cyan-600 font-mono">@for</code> directs a whole convoy of cars one by one.</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-500" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n  Start[Template Render]\n  Start --> Check{@if Condition}\n  Check -->|True| Show[Render Block]\n  Check -->|False| Hide[Render @else Block]\n  Start --> Loop[@for Iteration]\n  Loop --> Item[Render Each Item DOM]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-orange-500" />Sample Code</h4>
                        <CodeBlock code={`<ul>\n  @for (item of items; track item.id) {\n    <li>{{ item.name }}</li>\n  } @empty {\n    <li>No items available.</li>\n  }\n</ul>`} lang="html" filename="list.component.html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Rendering dynamic tables of thousands of financial records securely and quickly using the optimized <code className="text-cyan-600 font-mono">track</code> expression.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>No need to import <code className="text-cyan-400">CommonModule</code> for basic logic.</li>
                            <li>Better type-checking and up to 90% faster runtime performance.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Requires migrating old codebases from <code className="text-cyan-400">*ngIf</code>.</li>
                            <li><code className="text-cyan-400">track</code> is mandatory in <code className="text-cyan-400">@for</code>.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'angular-pipes',
            title: '4. [Beginner] Built-in & Custom Pipes (@Pipe, PipeTransform)',
            definition: 'Pipes transform displayed template data (date, uppercase, currency, json, async). Custom pipes implement the PipeTransform interface with @Pipe({ name: "myPipe" }).',
            syntax: `<p>{{ price | currency:'INR' }}</p>
<p>{{ todayDate | date:'dd-MM-yyyy' }}</p>
<p>{{ dataStream$ | async }}</p>`,
            codeSnippet: `import { Pipe, PipeTransform, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom Pipe Definition
@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 20): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}

@Component({
  selector: 'app-pipe-demo',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  template: \`
    <div className="p-4 space-y-2">
      <p>Original: {{ bio }}</p>
      <p className="fw-bold">Truncated: {{ bio | truncate:15 }}</p>
      <p className="text-success">Price: {{ price | currency:'INR' }}</p>
    </div>
  \`
})
export class PipeDemoComponent {
  bio = 'Angular Enterprise Framework Engineering Guide';
  price = 2499;
}`,
            realLifeScenario: 'Use the `async` pipe (`data$ | async`) to subscribe to RxJS Observables in templates automatically, ensuring unmount cleanup.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Pipes are simple functions used in template expressions to accept an input value and return a transformed value, visually formatting data without changing the underlying variable.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Pipes are like wearing colored sunglasses. The actual object (data) doesn&apos;t change its color, but through the sunglasses (pipe), it appears differently to you.</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-500" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR\n  Data[Raw Data: 1500.5] --> Pipe[currency Pipe]\n  Pipe --> Output[Formatted: $1,500.50]\n  Output --> UI[Render in DOM]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-orange-500" />Sample Code</h4>
                        <CodeBlock code={`<p>Event Date: {{ eventDate | date:'fullDate' }}</p>\n<p>Uppercase: {{ username | uppercase }}</p>`} lang="html" filename="pipes.component.html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Localizing timestamps and currencies accurately for users around the world natively in HTML without bloating the component.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Keeps component logic clean by offloading formatting.</li>
                            <li><code className="text-cyan-400">async</code> pipe handles Observable memory management effortlessly.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Impure pipes execute on every change detection cycle, killing performance.</li>
                            <li>Multiple chained pipes can be hard to read.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'angular-services-di',
            title: '5. [Intermediate] Services & Dependency Injection (@Injectable)',
            definition: 'Services encapsulate reusable data fetching and business logic. The Dependency Injection (DI) system injects service instances into components via `@Injectable({ providedIn: "root" })`.',
            syntax: `@Injectable({ providedIn: 'root' })
export class UserService {
    // Shared singleton service
}`,
            codeSnippet: `import { Injectable, Component, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  getCourses() {
    return ['Angular 17', 'TypeScript', 'RxJS Masterclass'];
  }
}

@Component({
  selector: 'app-course-widget',
  standalone: true,
  template: \`
    <div className="p-3 border rounded-xl">
      <h4>Courses Count: {{ courses.length }}</h4>
    </div>
  \`
})
export class CourseWidgetComponent {
  // Inject service using inject() function (Angular 14+)
  private courseService = inject(CourseService);
  courses = this.courseService.getCourses();
}`,
            realLifeScenario: 'Registering services with `providedIn: "root"` creates application-wide singletons that tree-shake unused services during production builds.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Dependency Injection (DI) is a design pattern where a class requests dependencies from external sources rather than creating them. Angular services use <code className="text-cyan-600 font-mono">@Injectable()</code> to provide shareable business logic.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Think of DI as room service in a hotel. You (the component) don&apos;t cook the food yourself; you just call the front desk (the Injector) and request food (the Service), which is then delivered to you.</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-500" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n  DI[DI Container / Injector]\n  Svc[DataService Instance]\n  DI -->|Provides| Svc\n  Comp1[Component A] -->|Requests| DI\n  Comp2[Component B] -->|Requests| DI\n  Svc -.->|Injected| Comp1\n  Svc -.->|Injected| Comp2`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-orange-500" />Sample Code</h4>
                        <CodeBlock code={`@Injectable({ providedIn: 'root' })\nexport class ApiService {\n  fetchData() { return ['Data']; }\n}\n\n// Usage in Component\nexport class MyComp {\n  private api = inject(ApiService);\n}`} lang="typescript" filename="di.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Sharing user authentication state and fetching REST API data securely across 50 different components using a single Auth Service.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Promotes extreme code reusability and clean architecture.</li>
                            <li><code className="text-cyan-400">providedIn: &apos;root&apos;</code> enables automatic tree-shaking of dead code.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Singleton state can sometimes cause cross-component contamination bugs.</li>
                            <li>Hierarchical DI scopes can be difficult to debug.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'angular-component-communication',
            title: '6. [Intermediate] Component Communication (@Input, @Output)',
            definition: 'Pass data down to child components using `@Input()` decorators. Emit child events up to parent components using `@Output()` with `EventEmitter`.',
            syntax: `// Child Component:
@Input() title = '';
@Output() onSave = new EventEmitter<string>();

this.onSave.emit(this.title);`,
            codeSnippet: `import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-item',
  standalone: true,
  template: \`
    <div className="p-3 border bg-light d-flex justify-content-between">
      <span>{{ itemName }}</span>
      <button (click)="notifyParent()" className="btn btn-sm btn-danger">Delete</button>
    </div>
  \`
})
export class ChildItemComponent {
  @Input() itemName = '';
  @Output() deleteEvent = new EventEmitter<string>();

  notifyParent() {
    this.deleteEvent.emit(this.itemName);
  }
}`,
            realLifeScenario: 'Reusable UI modal dialog components notify parent pages when users click the Confirm action button via `@Output()`.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Components communicate vertically. Data flows downward from parent to child via <code className="text-cyan-600 font-mono">@Input()</code>, and events flow upward from child to parent via <code className="text-cyan-600 font-mono">@Output()</code> and <code className="text-cyan-600 font-mono">EventEmitter</code>.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Think of a manager and an employee. The manager gives tasks downward (<code className="text-cyan-600 font-mono">@Input</code>), and the employee reports back completion upward (<code className="text-cyan-600 font-mono">@Output</code>).</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-500" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n  Parent[Parent Component]\n  Child[Child Component]\n  Parent -->|@Input property binding| Child\n  Child -->|@Output EventEmitter| Parent`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-orange-500" />Sample Code</h4>
                        <CodeBlock code={`// Modern Signal Inputs (v17.1+)\nexport class Child {\n  name = input<string>();\n  saved = output<void>();\n}`} lang="typescript" filename="signals.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Building generic dropdown or modal components that accept configurations as inputs and emit selection changes to the consuming page.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Enforces clear, unidirectional data flow.</li>
                            <li>Keeps child components completely decoupled and highly reusable.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>&quot;Prop drilling&quot; becomes painful for deeply nested component trees.</li>
                            <li>Requires boilerplate <code className="text-cyan-400">EventEmitter</code> code.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'angular-lifecycle-hooks',
            title: '7. [Intermediate] Lifecycle Hooks (ngOnInit, ngOnDestroy)',
            definition: 'Lifecycle hooks manage component phases: initialization (`ngOnInit`), input change detection (`ngOnChanges`), view render completion (`ngAfterViewInit`), and cleanup (`ngOnDestroy`).',
            syntax: `export class MyComponent implements OnInit, OnDestroy {
    ngOnInit() { /* Component Initialized */ }
    ngOnDestroy() { /* Cleanup Subscriptions */ }
}`,
            codeSnippet: `import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  template: \`<div className="p-3 bg-dark text-white">Timer: {{ seconds }}s</div>\`
})
export class TimerComponent implements OnInit, OnDestroy {
  seconds = 0;
  private timerId: any;

  ngOnInit() {
    this.timerId = setInterval(() => {
      this.seconds++;
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId); // Cleanup to prevent memory leak
      console.log('Timer component destroyed & interval cleared.');
    }
  }
}`,
            realLifeScenario: 'Unsubscribing from RxJS Observables inside `ngOnDestroy()` prevents memory leaks when users navigate between pages.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Lifecycle hooks are specific methods Angular calls at certain moments during a component&apos;s existence, from its creation to its destruction.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Like human life stages: birth (<code className="text-cyan-600 font-mono">constructor</code>), childhood/learning (<code className="text-cyan-600 font-mono">ngOnInit</code>), physical growth (<code className="text-cyan-600 font-mono">ngAfterViewInit</code>), and death/will preparation (<code className="text-cyan-600 font-mono">ngOnDestroy</code>).</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-500" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n  C[constructor] --> OC[ngOnChanges]\n  OC --> OI[ngOnInit]\n  OI --> DCheck[ngDoCheck]\n  DCheck --> View[ngAfterViewInit]\n  View --> Destroy[ngOnDestroy]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-orange-500" />Sample Code</h4>
                        <CodeBlock code={`ngOnInit() { this.fetchData(); }\nngOnDestroy() { this.subscription.unsubscribe(); }`} lang="typescript" filename="lifecycle.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Using <code className="text-cyan-600 font-mono">ngAfterViewInit</code> to safely initialize heavy third-party JavaScript libraries (like Chart.js or Mapbox) after the DOM has fully rendered.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Predictable hook sequence ensures safe data fetching.</li>
                            <li><code className="text-cyan-400">ngOnDestroy</code> offers guaranteed cleanup against memory leaks.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Performing heavy logic in <code className="text-cyan-400">ngDoCheck</code> will severely impact app performance.</li>
                            <li>Signal-based reactivity is slowly replacing standard lifecycle hooks.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'angular-reactive-forms',
            title: '8. [Intermediate] Reactive Forms & Validation (FormBuilder)',
            definition: 'Reactive Forms provide explicit type-safe form management using `FormGroup`, `FormControl`, `FormBuilder`, and built-in `Validators` (required, email, minLength).',
            syntax: `loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
});`,
            codeSnippet: `import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: \`
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()" className="p-4 border rounded-xl space-y-3">
      <input formControlName="email" placeholder="Email" className="form-control" />
      <div *ngIf="userForm.get('email')?.invalid && userForm.get('email')?.touched" className="text-danger text-sm">
        Valid Email is required.
      </div>
      <button [disabled]="userForm.invalid" type="submit" className="btn btn-primary">Submit</button>
    </form>
  \`
})
export class ReactiveFormComponent {
  private fb = inject(FormBuilder);
  userForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  onSubmit() {
    console.log('Form Submitted Payload:', this.userForm.value);
  }
}`,
            realLifeScenario: 'Enterprise banking portals validate input formats live on form controls before allowing money transfers.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Reactive Forms are a model-driven approach where the form&apos;s state and validation logic reside completely inside the TypeScript class using <code className="text-cyan-600 font-mono">FormControl</code> and <code className="text-cyan-600 font-mono">FormGroup</code>.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Think of Reactive forms as a bouncer at an exclusive club holding an iPad. Every guest (input) is rigorously checked against the list (validators) programmatically before they even touch the door.</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-500" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n  FB[FormBuilder]\n  FG[FormGroup: userForm]\n  FC1[FormControl: email]\n  FC2[FormControl: password]\n  FB --> FG\n  FG --> FC1\n  FG --> FC2\n  FC1 -.->|Syncs| Input1[HTML Input email]\n  FC2 -.->|Syncs| Input2[HTML Input password]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-orange-500" />Sample Code</h4>
                        <CodeBlock code={`this.form.get('email')?.valueChanges.subscribe(val => console.log(val));`} lang="typescript" filename="reactive.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Complex dynamically generated surveys or multistep checkout wizards where validation rules change based on previous answers.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Synchronous data flow makes unit testing extremely easy.</li>
                            <li>Highly scalable and predictable for complex forms.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Verbose syntax with lots of boilerplate.</li>
                            <li>Requires importing <code className="text-cyan-400">ReactiveFormsModule</code> explicitly.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'angular-routing-navigation',
            title: '9. [Advanced] Routing & Navigation (RouterModule, loadComponent)',
            definition: 'Angular Router maps browser URL paths to components using Routes configuration, `<router-outlet>`, `routerLink`, `ActivatedRoute`, and `Router`.',
            syntax: `export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'course/:id', loadComponent: () => import('./detail.component').then(m => m.DetailComponent) }
];`,
            codeSnippet: `import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/forms';

@Component({
  selector: 'app-nav-widget',
  standalone: true,
  imports: [RouterModule],
  template: \`
    <nav className="d-flex gap-3 p-3 bg-light">
      <a routerLink="/" className="nav-link">Home</a>
      <a routerLink="/courses" className="nav-link">Courses</a>
      <button (click)="goToSettings()" className="btn btn-sm btn-outline-dark">Settings</button>
    </nav>
  \`
})
export class NavWidgetComponent {
  private router = inject(Router);
  goToSettings() {
    this.router.navigate(['/settings']);
  }
}`,
            realLifeScenario: 'Single-page web applications change URL paths instantly without triggering full page reloads.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">The Router enables navigation from one view to another as users perform application tasks, converting the single HTML page into a multi-view application.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Routing is like a digital mall directory. The URL is the map location, and the <code className="text-cyan-600 font-mono">&lt;router-outlet&gt;</code> is the storefront space that changes dynamically based on where you walk.</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-500" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR\n  URL[/products/123] --> Router[Angular Router]\n  Router --> Match[Matches path: 'products/:id']\n  Match --> Outlet[Loads Component in <router-outlet>]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-orange-500" />Sample Code</h4>
                        <CodeBlock code={`<router-outlet></router-outlet>\n<a routerLink="/about">About Us</a>`} lang="html" filename="app.component.html" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Lazy loading heavy dashboard modules only when the user explicitly navigates to <code className="text-cyan-600 font-mono">/dashboard</code>, saving megabytes of initial JS load.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li><code className="text-cyan-400">loadComponent</code> drastically reduces initial bundle sizes.</li>
                            <li>Deep-linking allows sharing specific page URLs effortlessly.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Complex nested routing structures can become hard to maintain.</li>
                            <li>Passing complex objects through route parameters is anti-pattern.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'angular-route-guards-lazy-loading',
            title: '10. [Advanced] Route Guards & Functional Guards (CanActivateFn)',
            definition: 'Route Guards protect pages from unauthorized access using functional guards (`CanActivateFn`) to verify authentication tokens before routing.',
            syntax: `export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    return authService.isLoggedIn() ? true : inject(Router).createUrlTree(['/login']);
};`,
            codeSnippet: `import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = () => {
    const isAdmin = false; // Check Auth Token / Role
    const router = inject(Router);
    
    if (!isAdmin) {
        console.warn('Access denied by Admin Guard!');
        return router.parseUrl('/unauthorized');
    }
    return true;
};`,
            realLifeScenario: 'Admin route guards intercept unauthorized users, redirecting them to login pages if valid JWT tokens are missing.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Route Guards are interfaces (now functional functions) that act as middleware to allow or deny navigation to requested routes based on custom logic like authentication.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Guards are exactly like security checkpoints at an airport. If you have a ticket (token), the guard (<code className="text-cyan-600 font-mono">CanActivate</code>) lets you proceed to your gate. If not, they redirect you back to the ticket counter.</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-500" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n  User[User clicks link] --> Router[Router]\n  Router --> Guard{authGuard Check}\n  Guard -->|Returns True| Allow[Load Secure Page]\n  Guard -->|Returns False/Tree| Deny[Redirect to Login]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-orange-500" />Sample Code</h4>
                        <CodeBlock code={`const routes: Routes = [\n  { path: 'admin', component: AdminComp, canActivate: [adminGuard] }\n];`} lang="typescript" filename="app.routes.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Preventing unauthenticated users from accessing the payment checkout page, or using <code className="text-cyan-600 font-mono">CanDeactivate</code> to warn users before leaving a form with unsaved changes.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Centralized security logic rather than checking in every component.</li>
                            <li>Functional guards require minimal boilerplate compared to old class-based guards.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Guards only protect the frontend; real security requires backend validation.</li>
                            <li>Async guards can delay navigation noticeably if API checks are slow.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'angular-rxjs-reactive-programming',
            title: '11. [Advanced] RxJS & Reactive Programming (BehaviorSubject, Operators)',
            definition: 'RxJS provides reactive asynchronous data stream management via Observables, Subjects, BehaviorSubject (holds current value), and operators (map, filter, switchMap).',
            syntax: `private userSubject = new BehaviorSubject<User | null>(null);
user$ = this.userSubject.asObservable();

fetchUser() {
    this.http.get<User>('/user').pipe(
        map(user => user.name),
        catchError(err => of('Fallback User'))
    ).subscribe();
}`,
            codeSnippet: `import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartStore {
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  addToCart() {
    const current = this.cartCountSubject.value;
    this.cartCountSubject.next(current + 1);
  }
}`,
            realLifeScenario: 'Shopping cart counters stream real-time item updates to header badges across components using `BehaviorSubject`.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">RxJS is a library for reactive programming using Observables, which makes it easier to compose asynchronous or callback-based code using a rich set of operators.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Observables are like subscribing to a magazine. You subscribe once, and issues (data streams) are pushed to your house periodically. If you unsubscribe, the deliveries stop.</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-500" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR\n  Source[Stream Source] --> Op1[pipe: filter]\n  Op1 --> Op2[pipe: map]\n  Op2 --> Sub[Subscriber UI]\n  Source -.->|Canceled| OldSub[Old Request (switchMap)]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-orange-500" />Sample Code</h4>
                        <CodeBlock code={`search$.pipe(\n  debounceTime(300),\n  switchMap(term => this.api.search(term))\n).subscribe(results => this.data = results);`} lang="typescript" filename="rxjs.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Live search typeaheads use <code className="text-cyan-600 font-mono">debounceTime</code> to wait for typing to stop and <code className="text-cyan-600 font-mono">switchMap</code> to cancel outdated API requests automatically.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Extremely powerful for handling complex async race conditions.</li>
                            <li>Cancellable streams (unlike standard Promises).</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Notorious learning curve; operators like <code className="text-cyan-400">mergeMap</code> vs <code className="text-cyan-400">switchMap</code> confuse many.</li>
                            <li>Forgetting to unsubscribe causes severe memory leaks.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'angular-httpclient-interceptors',
            title: '12. [Advanced] HttpClient & HttpInterceptor (Functional Interceptors)',
            definition: 'HttpClient handles REST API calls. Functional HTTP Interceptors (`HttpInterceptorFn`) modify outgoing HTTP request headers (attaching Bearer JWT tokens).',
            syntax: `export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authToken = 'MY_JWT_BEARER_TOKEN';
    const authReq = req.clone({ setHeaders: { Authorization: \`Bearer \${authToken}\` } });
    return next(authReq);
};`,
            codeSnippet: `import { HttpInterceptorFn } from '@angular/common/http';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
    console.log(\`[HTTP Outgoing Request]: \${req.method} \${req.url}\`);
    return next(req);
};`,
            realLifeScenario: 'HTTP Interceptors attach Bearer Authorization headers automatically to every outgoing API call.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">HttpClient communicates with backend services over HTTP. Interceptors are functions that sit between your app and the network, allowing you to intercept and modify requests or responses.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Think of an interceptor as an outgoing mail room. Before any letter (request) leaves the building, the mailroom automatically stamps it with the company&apos;s return address (JWT token) so you don&apos;t have to do it manually.</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-500" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR\n  App[HttpClient get] --> Int1[Auth Interceptor]\n  Int1 -->|Adds Token| Int2[Logging Interceptor]\n  Int2 --> Server[Backend API Server]\n  Server -->|Response| Int2\n  Int2 --> Int1\n  Int1 --> App`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-orange-500" />Sample Code</h4>
                        <CodeBlock code={`bootstrapApplication(AppComponent, {\n  providers: [\n    provideHttpClient(withInterceptors([authInterceptor]))\n  ]\n});`} lang="typescript" filename="main.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Globally catching 401 Unauthorized API responses in a single interceptor to instantly log the user out and redirect them to the login screen.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>DRY (Don&apos;t Repeat Yourself) principle for API tokens and error handling.</li>
                            <li>Immutable requests ensure predictable network behavior.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Order of interceptors matters immensely and can cause silent bugs.</li>
                            <li>Cloning requests in the interceptor can feel overly verbose.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'angular-ngrx-state-management',
            title: '13. [Professional] State Management with NgRx (Store, Actions, Selectors)',
            definition: 'NgRx implements Redux pattern architecture in Angular, providing a Single Source of Truth via Actions, Reducers, Effects, and Selectors.',
            syntax: `export const loadCourses = createAction('[Course] Load Courses');
export const courseReducer = createReducer(initialState, on(...));`,
            codeSnippet: `// Conceptual NgRx Architecture Flow
// Action: Dispatch Intent ──> Reducer: Pure State Mutation ──> Selector: Subscribe Component UI`,
            realLifeScenario: 'Enterprise banking portals manage global multi-tab account state using NgRx Redux store architecture.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">NgRx is a framework for building reactive applications in Angular. It provides state management using the Redux pattern, ensuring that global application state is predictable, immutable, and strictly controlled.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Imagine a highly strict bank vault (Store). You can&apos;t just walk in and change money. You have to fill out a withdrawal slip (Action), hand it to the teller (Reducer), who executes the rules, updates the vault, and hands you a receipt (Selector).</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-500" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n  Comp[Component UI] -->|Dispatches| Action[Action]\n  Action --> Reducer[Reducer / State Mutation]\n  Action --> Effect[Effects / API Call]\n  Effect -->|New Action| Reducer\n  Reducer --> Store[(Global Store)]\n  Store -->|Selectors| Comp`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-orange-500" />Sample Code</h4>
                        <CodeBlock code={`this.store.dispatch(loadUser());\nthis.user$ = this.store.select(selectCurrentUser);`} lang="typescript" filename="ngrx.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Massive enterprise dashboards where user roles, permissions, caching, and multi-step complex workflows need to survive across dozens of routed pages.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Total predictability and time-travel debugging via Redux DevTools.</li>
                            <li>Separates API side-effects (NgRx Effects) cleanly from UI components.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Massive amount of boilerplate files required for even a simple state change.</li>
                            <li>Over-engineering for small-to-medium sized applications.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'angular-signals-performance',
            title: '14. [Professional] Performance Optimization & Angular Signals',
            definition: 'Angular 16+ Signals (`signal()`, `computed()`, `effect()`) introduce fine-grained reactivity without relying on Zone.js change detection sweeps.',
            syntax: `count = signal(0);
doubleCount = computed(() => this.count() * 2);

increment() { this.count.update(c => c + 1); }`,
            codeSnippet: `import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  template: \`
    <div className="p-4 border rounded-xl space-y-2">
      <h3>Signal Count: {{ count() }}</h3>
      <h4>Computed Double: {{ doubleCount() }}</h4>
      <button (click)="increment()" className="btn btn-success">Increment Signal</button>
    </div>
  \`
})
export class SignalsDemoComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.update(val => val + 1);
  }
}`,
            realLifeScenario: 'Angular Signals eliminate full component tree change detection sweeps, updating only exact DOM nodes whose signals changed.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Signals are a reactive primitive that hold a value and notify consumers when it changes. They allow Angular to track exactly where state is used and update only those specific DOM elements without Zone.js overhead.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Older Angular (Zone.js) is like asking every single student in a massive school if their name is John. Signals is like having John raise his hand explicitly—the system instantly knows exactly where to look.</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-500" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n  Sig[signal: count] --> Comp[computed: double]\n  Sig --> Effect[effect: console.log]\n  Comp --> DOM[DOM Update]\n  Sig -.->|update()| DOM`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-orange-500" />Sample Code</h4>
                        <CodeBlock code={`const name = signal('Angular');\nname.set('Angular 17'); // Updates DOM precisely`} lang="typescript" filename="signal.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">High-frequency data streaming applications like live stock market tickers that update multiple times per second without freezing the browser.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Massive performance gains through fine-grained reactivity.</li>
                            <li>Paves the way for <code className="text-cyan-400">zoneless</code> Angular applications.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Requires paradigm shift from traditional RxJS observables.</li>
                            <li>Mixing Signals and Observables can be mentally taxing for developers.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'angular-testing-jasmine-karma',
            title: '15. [Professional] Testing Angular Applications (TestBed & ComponentFixture)',
            definition: 'Unit test Angular applications using Jasmine test runners and Angular `TestBed` to configure isolated testing modules and inspect `ComponentFixture` DOM outputs.',
            syntax: `describe('DemoComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [DemoComponent] }).compileComponents();
    });
});`,
            codeSnippet: `import { TestBed, ComponentFixture } from '@angular/core/testing';
import { UserProfileComponent } from './user-profile.component';

describe('UserProfileComponent Unit Test Suite', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component instance', () => {
    expect(component).toBeTruthy();
  });
});`,
            realLifeScenario: 'CI/CD deployment pipelines run `ng test --no-watch` to verify component logic before deploying production builds.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Testing ensures application reliability. Angular provides <code className="text-cyan-600 font-mono">TestBed</code> to simulate the Angular environment for unit tests, verifying component logic, service DI, and DOM manipulation.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Unit testing is like a crash test dummy in a car simulator. You simulate real-world conditions (user clicks) in a safe, isolated environment (<code className="text-cyan-600 font-mono">TestBed</code>) to ensure the airbags (logic) deploy correctly.</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-500" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph TD\n  Test[describe Block] --> Init[TestBed configures Module]\n  Init --> Fixture[Creates ComponentFixture]\n  Fixture --> Logic[Test Component Logic]\n  Fixture --> DOM[Test DOM Output]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-orange-500" />Sample Code</h4>
                        <CodeBlock code={`it('should update DOM', () => {\n  fixture.detectChanges();\n  const el = fixture.nativeElement.querySelector('h1');\n  expect(el.textContent).toContain('Hello');\n});`} lang="typescript" filename="spec.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Enterprise CI/CD pipelines require 80%+ code coverage on all pull requests to prevent broken code from ever reaching the main branch.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Catches regressions and bugs before production deployment.</li>
                            <li><code className="text-cyan-400">TestBed</code> mimics the real Angular compilation perfectly.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Testing asynchronous operations can be highly complex and brittle.</li>
                            <li>Requires heavy mocking of services and dependencies.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'angular-enterprise-architecture-ssr',
            title: '16. [Professional] Enterprise Architecture & Angular SSR Hydration',
            definition: 'Enterprise Angular architectures structure large applications using NX Monorepos, Micro-frontends, and Angular Universal SSR (Server-Side Rendering) with non-destructive hydration.',
            syntax: `// Angular SSR Command Blueprint:
$ ng add @angular/ssr
$ ng build --ssr`,
            codeSnippet: `// Server-Side Rendering Hydration
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration() // Non-destructive DOM Hydration
  ]
};`,
            realLifeScenario: 'Enterprise portals deploy Angular SSR to provide instant server-rendered HTML for fast initial Page Load and search engine SEO indexing.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center"><BookOpen className="w-5 h-5 mr-2" />Definition</h4>
                        <p className="text-gray-700 dark:text-gray-300">Server-Side Rendering (SSR) pre-renders Angular pages on the Node.js server. Non-destructive hydration attaches event listeners to this HTML on the client without flickering or rebuilding the DOM structure.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Real-Life Analogy &amp; Example</h4>
                        <p className="text-gray-700 dark:text-gray-300">Standard SPA is like shipping raw IKEA furniture parts to a customer. SSR is shipping the fully assembled chair. Hydration is simply adding the cushions so it&apos;s comfortable to use instantly.</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-500" />Visual Explanation</h4>
                        <MermaidDiagram chart={`graph LR\n  Req[Browser Request] --> Node[Node.js Express Server]\n  Node -->|Renders HTML string| Req\n  Req -->|Instant Paint| Browser[Static UI Visible]\n  Browser -->|Hydration| JS[Downloads Angular JS]\n  JS -->|Attaches Listeners| Interactive[Fully Interactive App]`} />
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center"><Code className="w-5 h-5 mr-2 text-orange-500" />Sample Code</h4>
                        <CodeBlock code={`if (isPlatformBrowser(this.platformId)) {\n  // Execute only in browser, not on server\n}`} lang="typescript" filename="ssr.ts" />
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center"><Cpu className="w-5 h-5 mr-2" />Real-World Application</h4>
                        <p className="text-gray-700 dark:text-gray-300">Public-facing e-commerce stores (like retail giants) require SSR for SEO web crawlers to read product data and for blazing-fast First Contentful Paint metrics.</p>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2 flex items-center"><Check className="w-5 h-5 mr-2" />Advantages</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Massive improvements in SEO and social media link unfurling.</li>
                            <li><code className="text-cyan-400">provideClientHydration</code> eliminates the visual flicker of older Angular versions.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
                        <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2" />Disadvantages / Limitations</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Requires running a Node.js server instead of just static file hosting.</li>
                            <li>Third-party libraries touching <code className="text-cyan-400">window</code> or <code className="text-cyan-400">document</code> directly will crash the server render.</li>
                        </ul>
                    </div>
                </div>
            )
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    return (
        <CoursePageLayout
            title="Angular Masterclass Course"
            description="Master Angular from Standalone Components, Data Binding, and Pipes to Services, RxJS, NgRx, Signals, and Angular SSR."
            topics={topics}
            icon={Hexagon}
            colorClass="red"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {/* Part 1: Concept Definition & Detailed Explanation */}
                <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-2 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        1. Concept Definition & Detailed Explanation
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-4">
                        {activeTopic.definition}
                    </p>
                    <div className="prose dark:prose-invert max-w-none text-sm text-gray-700 dark:text-gray-300">
                        {activeTopic.content}
                    </div>
                </div>

                {/* Part 2: Formal Code Syntax Blueprint */}
                {activeTopic.syntax ? (
                    <div className="bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center">
                            <FileText className="w-5 h-5 mr-2" />
                            2. Formal Code Syntax Blueprint
                        </h3>
                        <div className="bg-slate-900 text-slate-100 font-mono text-sm p-4 rounded-xl border border-slate-800 overflow-x-auto">
                            <pre>{activeTopic.syntax}</pre>
                        </div>
                    </div>
                ) : (
                    <div className="bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-600 p-6 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center">
                            <FileText className="w-5 h-5 mr-2" />
                            2. Formal Code Syntax Blueprint
                        </h3>
                        <div className="bg-slate-900 text-slate-100 font-mono text-sm p-4 rounded-xl border border-slate-800 overflow-x-auto">
                            <pre>{`// Angular Blueprint\n@Component({ standalone: true })\nexport class AppComponent {}`}</pre>
                        </div>
                    </div>
                )}

                {/* Part 3: Executable Code Example */}
                {activeTopic.codeSnippet && (
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-red-600" />
                            3. Executable Production Code Example
                        </h3>
                        <CodeBlock code={activeTopic.codeSnippet} lang="typescript" colorClass="red" filename="component.ts" />
                    </div>
                )}

                {/* Part 4: Real-Life Scenario Example */}
                <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        4. Real-Life Industry Scenario & Application
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {activeTopic.realLifeScenario || activeTopic.example || "Powers enterprise banking portals, cloud management consoles, single-page web applications, and large-scale web systems."}
                    </p>
                </div>
            </div>
        </CoursePageLayout>
    );
};

export default AngularCoursePage;
