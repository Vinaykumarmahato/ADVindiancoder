import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Bot, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, ShieldAlert, Zap, Brain, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface AiTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const AiCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: AiTopic[] = [
        {
            id: 'ai-intro-landscape',
            title: '1. [Beginner] Introduction to AI & ML (Supervised vs Unsupervised)',
            definition: 'Artificial Intelligence (AI) simulates human reasoning in software. Machine Learning (ML) is an AI subset enabling algorithms to learn statistical patterns from data. Deep Learning uses multi-layer neural networks.',
            syntax: `# AI / ML Hierarchy Blueprint:
Artificial Intelligence (Rule Systems, Heuristics)
  └── Machine Learning (Supervised, Unsupervised, Reinforcement)
        └── Deep Learning (Artificial Neural Networks, Transformers)
              └── Generative AI (LLMs, Diffusion Models)`,
            codeSnippet: `import sklearn
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Load Sample Dataset
iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.2)

# Train ML Classifier
model = RandomForestClassifier(n_estimators=50)
model.fit(X_train, y_train)

accuracy = model.score(X_test, y_test)
print(f"Iris Classifier Accuracy: {accuracy * 100:.2f}%")`,
            realLifeScenario: 'Autonomous vehicles (Tesla Autopilot) combine computer vision deep learning with reinforcement learning path planning to navigate city streets.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Artificial Intelligence (AI) simulates human reasoning in software. Machine Learning (ML) is an AI subset enabling algorithms to learn statistical patterns from data. Deep Learning uses multi-layer neural networks.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Autonomous vehicles (Tesla Autopilot) combine computer vision deep learning with reinforcement learning path planning to navigate city streets.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
AI[Artificial Intelligence] --> ML[Machine Learning]
ML --> Sup[Supervised]
ML --> Unsup[Unsupervised]
ML --> RL[Reinforcement]`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`import sklearn\nfrom sklearn.datasets import load_iris\n# Load dataset and train basic classifier`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Applying these concepts in production allows scaling automated decision-making systems effectively.
                        </p>
                    </div>

                    {/* 6 & 7. Advantages and Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-emerald-400 mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Powerful automation capabilities</li>
                                <li>Scales effectively with <code className="text-cyan-400 font-mono">computational power</code></li>
                                <li>Reduces manual human errors</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-red-400 mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Requires high quality <code className="text-cyan-400 font-mono">data</code></li>
                                <li>Potential for embedded biases</li>
                                <li>Computationally expensive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ai-math-for-ml-gradient-descent',
            title: '2. [Beginner] Math for Machine Learning (Gradient Descent)',
            definition: 'Machine Learning relies on Linear Algebra (vectors, matrices), Calculus (partial derivatives, gradients), and Optimization algorithms (Gradient Descent, Learning Rate &alpha;).',
            syntax: `# Gradient Descent Parameter Update Rule:
# theta_new = theta_old - alpha * grad(Loss)`,
            codeSnippet: `import numpy as np

# Basic Gradient Descent Implementation for Linear Regression
def gradient_descent(X, y, lr=0.01, epochs=1000):
    m, n = X.shape
    weights = np.zeros(n)
    bias = 0
    
    for epoch in range(epochs):
        predictions = np.dot(X, weights) + bias
        error = predictions - y
        
        # Calculate Gradients (Partial Derivatives)
        dw = (1 / m) * np.dot(X.T, error)
        db = (1 / m) * np.sum(error)
        
        # Update Parameters opposite to Gradient direction
        weights -= lr * dw
        bias -= lr * db
        
    return weights, bias

X = np.array([[1], [2], [3], [4]])
y = np.array([3, 5, 7, 9]) # y = 2x + 1
w, b = gradient_descent(X, y)
print(f"Learned Weight: {w[0]:.2f}, Learned Bias: {b:.2f}")`,
            realLifeScenario: 'Gradient Descent optimizes neural network weights by minimizing loss surfaces across millions of parameters.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Machine Learning relies on Linear Algebra (vectors, matrices), Calculus (partial derivatives, gradients), and Optimization algorithms (Gradient Descent, Learning Rate &alpha;).
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Gradient Descent optimizes neural network weights by minimizing loss surfaces across millions of parameters.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
A[Start with Random Weights] --> B[Calculate Loss]
B --> C[Compute Gradients]
C --> D[Update Weights]
D --> B`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`def gradient_descent(X, y, lr=0.01, epochs=1000):\n    # Core gradient loop`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Applying these concepts in production allows scaling automated decision-making systems effectively.
                        </p>
                    </div>

                    {/* 6 & 7. Advantages and Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-emerald-400 mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Powerful automation capabilities</li>
                                <li>Scales effectively with <code className="text-cyan-400 font-mono">computational power</code></li>
                                <li>Reduces manual human errors</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-red-400 mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Requires high quality <code className="text-cyan-400 font-mono">data</code></li>
                                <li>Potential for embedded biases</li>
                                <li>Computationally expensive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ai-scikit-learn-foundation',
            title: '3. [Beginner] Scikit-Learn Foundation (Pipeline & ColumnTransformer)',
            definition: 'Scikit-Learn provides a unified API (`fit()`, `transform()`, `predict()`) for building modular preprocessing and model training Pipelines.',
            syntax: `from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('clf', LogisticRegression())
])
pipe.fit(X_train, y_train)`,
            codeSnippet: `from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression
import pandas as pd

# Define Preprocessing & Classifier Pipeline
num_features = ['age', 'fare']
cat_features = ['embarked']

preprocessor = ColumnTransformer([
    ('num', StandardScaler(), num_features),
    ('cat', OneHotEncoder(), cat_features)
])

pipeline = Pipeline([
    ('prep', preprocessor),
    ('model', LogisticRegression())
])

# Training on Sample DataFrame
df = pd.DataFrame({'age': [22, 38, 26], 'fare': [7.25, 71.28, 7.92], 'embarked': ['S', 'C', 'S']})
y = [0, 1, 1]
pipeline.fit(df, y)
print("Pipeline trained successfully!")`,
            realLifeScenario: 'Scikit-Learn Pipelines prevent data leakage between training and test sets during feature scaling transformations.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Scikit-Learn provides a unified API (<code className="text-cyan-600 font-mono">fit()</code>, <code className="text-cyan-600 font-mono">transform()</code>, <code className="text-cyan-600 font-mono">predict()</code>) for building modular preprocessing and model training Pipelines.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Scikit-Learn Pipelines prevent data leakage between training and test sets during feature scaling transformations.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
Data[Raw Data] --> Preprocessor[ColumnTransformer]
Preprocessor --> Scaler[StandardScaler]
Preprocessor --> Encoder[OneHotEncoder]
Scaler --> Model[Estimator]
Encoder --> Model`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`from sklearn.pipeline import Pipeline\n# Pipeline usage example`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Applying these concepts in production allows scaling automated decision-making systems effectively.
                        </p>
                    </div>

                    {/* 6 & 7. Advantages and Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-emerald-400 mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Powerful automation capabilities</li>
                                <li>Scales effectively with <code className="text-cyan-400 font-mono">computational power</code></li>
                                <li>Reduces manual human errors</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-red-400 mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Requires high quality <code className="text-cyan-400 font-mono">data</code></li>
                                <li>Potential for embedded biases</li>
                                <li>Computationally expensive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ai-core-regression-classification',
            title: '4. [Beginner] Core Regression & Classification Models',
            definition: 'Master foundational models: Linear Regression, Regularized Regression (Ridge L2 / Lasso L1), Logistic Regression, Naive Bayes Classifier, and k-Nearest Neighbors (k-NN).',
            syntax: `# Lasso L1 Regularization (Performs Automatic Feature Selection):
from sklearn.linear_model import Lasso
lasso = Lasso(alpha=0.1)
lasso.fit(X, y)`,
            codeSnippet: `from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB
import numpy as np

X = np.array([[1, 2], [2, 3], [3, 1], [6, 5], [7, 7], [8, 6]])
y = np.array([0, 0, 0, 1, 1, 1])

# k-NN Classifier (k=3)
knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(X, y)

new_sample = np.array([[2, 2]])
pred = knn.predict(new_sample)
print("k-NN Prediction for [2, 2]: Class", pred[0])`,
            realLifeScenario: 'Spam filters use Naive Bayes classifiers to calculate the posterior probability of email spam based on word frequencies.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Master foundational models: Linear Regression, Regularized Regression (Ridge L2 / Lasso L1), Logistic Regression, Naive Bayes Classifier, and k-Nearest Neighbors (k-NN).
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Spam filters use Naive Bayes classifiers to calculate the posterior probability of email spam based on word frequencies.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
Models[Core Models] --> Reg[Regression]
Models --> Class[Classification]
Reg --> Lin[Linear Regression]
Reg --> Lasso[Lasso L1]
Class --> Log[Logistic Regression]
Class --> KNN[k-NN]`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`from sklearn.neighbors import KNeighborsClassifier\n# KNN Model`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Applying these concepts in production allows scaling automated decision-making systems effectively.
                        </p>
                    </div>

                    {/* 6 & 7. Advantages and Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-emerald-400 mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Powerful automation capabilities</li>
                                <li>Scales effectively with <code className="text-cyan-400 font-mono">computational power</code></li>
                                <li>Reduces manual human errors</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-red-400 mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Requires high quality <code className="text-cyan-400 font-mono">data</code></li>
                                <li>Potential for embedded biases</li>
                                <li>Computationally expensive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ai-tree-models-ensembles-xgboost',
            title: '5. [Intermediate] Tree-Based Models & Ensembles (XGBoost, LightGBM)',
            definition: 'Tree ensembles combine multiple decision trees: Random Forest (Bagging) vs Gradient Boosting (Boosting - XGBoost, LightGBM, CatBoost) to maximize predictive performance.',
            syntax: `import xgboost as xgb
model = xgb.XGBClassifier(n_estimators=100, learning_rate=0.05)
model.fit(X_train, y_train)`,
            codeSnippet: `from sklearn.ensemble import GradientBoostingClassifier
import numpy as np

X = np.random.rand(200, 10)
y = np.random.randint(0, 2, 200)

# Gradient Boosting Classifier
gbc = GradientBoostingClassifier(n_estimators=100, learning_rate=0.1, max_depth=3)
gbc.fit(X, y)

# Inspect Feature Importances
print("Top Feature Importances:\\n", gbc.feature_importances_[:3])`,
            realLifeScenario: 'Kaggle competitive machine learning tournaments are dominated by XGBoost and LightGBM models for structured tabular datasets.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Tree ensembles combine multiple decision trees: Random Forest (Bagging) vs Gradient Boosting (Boosting - XGBoost, LightGBM, CatBoost) to maximize predictive performance.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Kaggle competitive machine learning tournaments are dominated by XGBoost and LightGBM models for structured tabular datasets.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
Ensemble[Ensemble Methods] --> Bag[Bagging]
Ensemble --> Boost[Boosting]
Bag --> RF[Random Forest]
Boost --> XGB[XGBoost]
Boost --> LGBM[LightGBM]`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`import xgboost as xgb\n# XGBoost model training`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Applying these concepts in production allows scaling automated decision-making systems effectively.
                        </p>
                    </div>

                    {/* 6 & 7. Advantages and Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-emerald-400 mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Powerful automation capabilities</li>
                                <li>Scales effectively with <code className="text-cyan-400 font-mono">computational power</code></li>
                                <li>Reduces manual human errors</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-red-400 mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Requires high quality <code className="text-cyan-400 font-mono">data</code></li>
                                <li>Potential for embedded biases</li>
                                <li>Computationally expensive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ai-neural-networks-perceptrons',
            title: '6. [Intermediate] Neural Networks & Perceptrons (Activation Functions)',
            definition: 'Artificial Neural Networks connect layers of artificial neurons (Perceptrons). Pass inputs through Activation Functions (ReLU, Sigmoid, Softmax), updating weights via Backpropagation.',
            syntax: `# Multi-Layer Perceptron (MLP) Architecture Blueprint:
Input Layer ──> [Weights W1 + Bias b1] ──> Activation (ReLU) ──> Output Layer (Softmax)`,
            codeSnippet: `from sklearn.neural_network import MLPClassifier
import numpy as np

# Multi-Layer Perceptron (2 Hidden Layers of 64 and 32 neurons)
mlp = MLPClassifier(hidden_layer_sizes=(64, 32), activation='relu', max_iter=500)

X = np.random.rand(300, 20)
y = np.random.randint(0, 2, 300)

mlp.fit(X, y)
print("MLP Loss Iterations Count:", len(mlp.loss_curve_))`,
            realLifeScenario: 'ReLU (`max(0, x)`) activation functions resolve vanishing gradient problems in deep neural networks.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Artificial Neural Networks connect layers of artificial neurons (Perceptrons). Pass inputs through Activation Functions (ReLU, Sigmoid, Softmax), updating weights via Backpropagation.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            ReLU (<code className="text-blue-600 font-mono">max(0, x)</code>) activation functions resolve vanishing gradient problems in deep neural networks.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
Input[Input Layer] --> Hidden1[Hidden Layer 1]
Hidden1 --> Hidden2[Hidden Layer 2]
Hidden2 --> Output[Output Layer]`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`from sklearn.neural_network import MLPClassifier\n# Neural network training logic`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Applying these concepts in production allows scaling automated decision-making systems effectively.
                        </p>
                    </div>

                    {/* 6 & 7. Advantages and Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-emerald-400 mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Powerful automation capabilities</li>
                                <li>Scales effectively with <code className="text-cyan-400 font-mono">computational power</code></li>
                                <li>Reduces manual human errors</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-red-400 mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Requires high quality <code className="text-cyan-400 font-mono">data</code></li>
                                <li>Potential for embedded biases</li>
                                <li>Computationally expensive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ai-pytorch-fundamentals',
            title: '7. [Intermediate] PyTorch Fundamentals (Tensors & Autograd)',
            definition: 'PyTorch is an open-source deep learning framework providing GPU Tensors, automatic differentiation (`Autograd`), `nn.Module`, and `DataLoader` pipelines.',
            syntax: `import torch
import torch.nn as nn

class SimpleNet(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc = nn.Linear(10, 2)
    def forward(self, x):
        return self.fc(x)`,
            codeSnippet: `import torch
import torch.nn as nn
import torch.optim as optim

# Define Custom PyTorch Model
class BinaryClassifier(nn.Module):
    def __init__(self):
        super().__init__()
        self.layer = nn.Sequential(
            nn.Linear(4, 8),
            nn.ReLU(),
            nn.Linear(8, 1),
            nn.Sigmoid()
        )
    def forward(self, x):
        return self.layer(x)

model = BinaryClassifier()
criterion = nn.BCELoss()
optimizer = optim.Adam(model.parameters(), lr=0.01)

# Training Step Demo
inputs = torch.randn(5, 4)
targets = torch.tensor([[1.0], [0.0], [1.0], [0.0], [1.0]])

optimizer.zero_grad()
outputs = model(inputs)
loss = criterion(outputs, targets)
loss.backward() # Backprop
optimizer.step()
print("PyTorch Step Loss:", loss.item())`,
            realLifeScenario: 'AI research labs choose PyTorch for dynamic computation graph flexibility and GPU CUDA acceleration.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            PyTorch is an open-source deep learning framework providing GPU Tensors, automatic differentiation (<code className="text-cyan-600 font-mono">Autograd</code>), <code className="text-cyan-600 font-mono">nn.Module</code>, and <code className="text-cyan-600 font-mono">DataLoader</code> pipelines.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            AI research labs choose PyTorch for dynamic computation graph flexibility and GPU CUDA acceleration.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
Data[Tensors] --> Forward[Forward Pass]
Forward --> Loss[Compute Loss]
Loss --> Backprop[Autograd Backward Pass]
Backprop --> Optim[Optimizer Step]`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`import torch\nimport torch.nn as nn\n# PyTorch network class`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Applying these concepts in production allows scaling automated decision-making systems effectively.
                        </p>
                    </div>

                    {/* 6 & 7. Advantages and Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-emerald-400 mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Powerful automation capabilities</li>
                                <li>Scales effectively with <code className="text-cyan-400 font-mono">computational power</code></li>
                                <li>Reduces manual human errors</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-red-400 mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Requires high quality <code className="text-cyan-400 font-mono">data</code></li>
                                <li>Potential for embedded biases</li>
                                <li>Computationally expensive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ai-tensorflow-keras',
            title: '8. [Intermediate] TensorFlow & Keras (Sequential & Functional API)',
            definition: 'TensorFlow 2.x and Keras provide high-level neural network creation APIs (`Sequential`, `Functional`), model compilation, fitting, and Callbacks (`EarlyStopping`).',
            syntax: `import tensorflow as tf
from tensorflow.keras import layers, models

model = models.Sequential([
    layers.Dense(64, activation='relu', input_shape=(10,)),
    layers.Dense(1, activation='sigmoid')
])
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])`,
            codeSnippet: `import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.callbacks import EarlyStopping
import numpy as np

# Build Model
model = Sequential([
    Dense(32, activation='relu', input_shape=(8,)),
    Dense(16, activation='relu'),
    Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy')

# Configure Early Stopping Callback
early_stop = EarlyStopping(monitor='val_loss', patience=3)

X = np.random.rand(100, 8)
y = np.random.randint(0, 2, 100)
# model.fit(X, y, epochs=50, validation_split=0.2, callbacks=[early_stop])
print("Keras Model Summary Compiled!")`,
            realLifeScenario: 'Keras `EarlyStopping` callbacks monitor validation loss, halting training automatically before overfitting occurs.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            TensorFlow 2.x and Keras provide high-level neural network creation APIs (<code className="text-cyan-600 font-mono">Sequential</code>, <code className="text-cyan-600 font-mono">Functional</code>), model compilation, fitting, and Callbacks (<code className="text-cyan-600 font-mono">EarlyStopping</code>).
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Keras <code className="text-blue-600 font-mono">EarlyStopping</code> callbacks monitor validation loss, halting training automatically before overfitting occurs.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
Input[Input Data] --> Seq[Sequential Model]
Seq --> Compile[Compile w/ Optimizer]
Compile --> Fit[Model Fit]
Fit --> Callback[Callbacks]`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`import tensorflow as tf\n# TF Sequential API model`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Applying these concepts in production allows scaling automated decision-making systems effectively.
                        </p>
                    </div>

                    {/* 6 & 7. Advantages and Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-emerald-400 mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Powerful automation capabilities</li>
                                <li>Scales effectively with <code className="text-cyan-400 font-mono">computational power</code></li>
                                <li>Reduces manual human errors</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-red-400 mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Requires high quality <code className="text-cyan-400 font-mono">data</code></li>
                                <li>Potential for embedded biases</li>
                                <li>Computationally expensive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ai-computer-vision-cnns',
            title: '9. [Advanced] Computer Vision & CNNs (ResNet, YOLO)',
            definition: 'Convolutional Neural Networks (CNNs) process spatial grid images using Convolutions, Filters/Kernels, Pooling layers (`MaxPool`), and residual connections (`ResNet`).',
            syntax: `# PyTorch CNN Layer Blueprint:
self.conv1 = nn.Conv2d(in_channels=3, out_channels=32, kernel_size=3)
self.pool = nn.MaxPool2d(kernel_size=2, stride=2)`,
            codeSnippet: `import torch
import torch.nn as nn

class SimpleCNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.features = nn.Sequential(
            nn.Conv2d(1, 16, kernel_size=3, padding=1), # [B, 16, 28, 28]
            nn.ReLU(),
            nn.MaxPool2d(2, 2)                           # [B, 16, 14, 14]
        )
        self.fc = nn.Linear(16 * 14 * 14, 10)

    def forward(self, x):
        x = self.features(x)
        x = x.view(x.size(0), -1) # Flatten
        return self.fc(x)

model = SimpleCNN()
fake_image = torch.randn(1, 1, 28, 28) # Single MNIST image batch
out = model(fake_image)
print("CNN Output Tensor Shape:", out.shape)`,
            realLifeScenario: 'YOLO (You Only Look Once) real-time object detection models process live video streams at 60+ FPS for robotics and self-driving cars.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Convolutional Neural Networks (CNNs) process spatial grid images using Convolutions, Filters/Kernels, Pooling layers (<code className="text-cyan-600 font-mono">MaxPool</code>), and residual connections (<code className="text-cyan-600 font-mono">ResNet</code>).
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            YOLO (You Only Look Once) real-time object detection models process live video streams at 60+ FPS for robotics and self-driving cars.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
Image[Input Image] --> Conv[Convolution Layer]
Conv --> Pool[Pooling Layer]
Pool --> Flatten[Flatten]
Flatten --> Dense[Dense Layers]
Dense --> Pred[Prediction]`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`class SimpleCNN(nn.Module):\n    # Basic CNN PyTorch Model setup`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Applying these concepts in production allows scaling automated decision-making systems effectively.
                        </p>
                    </div>

                    {/* 6 & 7. Advantages and Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-emerald-400 mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Powerful automation capabilities</li>
                                <li>Scales effectively with <code className="text-cyan-400 font-mono">computational power</code></li>
                                <li>Reduces manual human errors</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-red-400 mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Requires high quality <code className="text-cyan-400 font-mono">data</code></li>
                                <li>Potential for embedded biases</li>
                                <li>Computationally expensive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ai-nlp-rnns-transformers',
            title: '10. [Advanced] Natural Language Processing (NLP) & Word Embeddings',
            definition: 'Process natural text using Tokenization, Embeddings (Word2Vec, GloVe), Recurrent Neural Networks (RNNs, LSTMs, GRUs), and Attention Transformers.',
            syntax: `# PyTorch Embedding & LSTM Layer Blueprint:
self.embedding = nn.Embedding(num_embeddings=10000, embedding_dim=128)
self.lstm = nn.LSTM(input_size=128, hidden_size=256, batch_first=True)`,
            codeSnippet: `import torch
import torch.nn as nn

class TextClassifierLSTM(nn.Module):
    def __init__(self, vocab_size=5000, embed_dim=64, hidden_dim=128):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embed_dim)
        self.lstm = nn.LSTM(embed_dim, hidden_dim, batch_first=True)
        self.fc = nn.Linear(hidden_dim, 2)

    def forward(self, x):
        embedded = self.embedding(x)
        lstm_out, (hn, cn) = self.lstm(embedded)
        return self.fc(hn[-1]) # Take final hidden state

model = TextClassifierLSTM()
fake_tokens = torch.randint(0, 5000, (2, 10)) # Batch of 2 sentences (10 tokens each)
print("LSTM Sentiment Output Shape:", model(fake_tokens).shape)`,
            realLifeScenario: 'LSTM networks maintain hidden state memory gates, capturing long-range context in sequential natural language processing tasks.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Process natural text using Tokenization, Embeddings (Word2Vec, GloVe), Recurrent Neural Networks (RNNs, LSTMs, GRUs), and Attention Transformers.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            LSTM networks maintain hidden state memory gates, capturing long-range context in sequential natural language processing tasks.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
Text[Text Sequence] --> Tokens[Tokenization]
Tokens --> Embed[Word Embeddings]
Embed --> LSTM[LSTM/RNN]
LSTM --> Dense[Dense Layer]`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`import torch.nn as nn\n# LSTM sequence model logic`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Applying these concepts in production allows scaling automated decision-making systems effectively.
                        </p>
                    </div>

                    {/* 6 & 7. Advantages and Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-emerald-400 mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Powerful automation capabilities</li>
                                <li>Scales effectively with <code className="text-cyan-400 font-mono">computational power</code></li>
                                <li>Reduces manual human errors</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-red-400 mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Requires high quality <code className="text-cyan-400 font-mono">data</code></li>
                                <li>Potential for embedded biases</li>
                                <li>Computationally expensive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ai-generative-models-gans-vaes',
            title: '11. [Advanced] Generative Models (GANs & Autoencoders)',
            definition: 'Generative models learn data distributions to synthesize new data samples: Autoencoders (compression), Variational Autoencoders (VAEs), and GANs (Generator vs Discriminator).',
            syntax: `# GAN Min-Max Game Loss Formula:
# min_G max_D E[log D(x)] + E[log(1 - D(G(z)))]`,
            codeSnippet: `# Conceptual GAN Architecture Setup
# Generator (G): Noise Vector Z ──> Synthetic Image Fake_X
# Discriminator (D): Real_X vs Fake_X ──> Real/Fake Classification (0 or 1)`,
            realLifeScenario: 'Generative Adversarial Networks (GANs) generate photorealistic synthetic image samples for medical data augmentation.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Generative models learn data distributions to synthesize new data samples: Autoencoders (compression), Variational Autoencoders (VAEs), and GANs (Generator vs Discriminator).
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Generative Adversarial Networks (GANs) generate photorealistic synthetic image samples for medical data augmentation.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
Noise[Random Noise] --> Gen[Generator]
Gen --> Fake[Fake Data]
Real[Real Data] --> Disc[Discriminator]
Fake --> Disc
Disc --> Class[Real or Fake?]`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`# Conceptual GAN generator + discriminator loop`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Applying these concepts in production allows scaling automated decision-making systems effectively.
                        </p>
                    </div>

                    {/* 6 & 7. Advantages and Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-emerald-400 mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Powerful automation capabilities</li>
                                <li>Scales effectively with <code className="text-cyan-400 font-mono">computational power</code></li>
                                <li>Reduces manual human errors</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-red-400 mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Requires high quality <code className="text-cyan-400 font-mono">data</code></li>
                                <li>Potential for embedded biases</li>
                                <li>Computationally expensive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ai-reinforcement-learning',
            title: '12. [Advanced] Reinforcement Learning (Q-Learning & DQN)',
            definition: 'Reinforcement Learning (RL) trains Agents to take Actions inside an Environment to maximize cumulative Rewards via Markov Decision Processes (MDP) and Deep Q-Networks (DQN).',
            syntax: `# Bellman Optimality Equation Blueprint:
# Q(s, a) = r + gamma * max_a' Q(s', a')`,
            codeSnippet: `import numpy as np

# Q-Learning State Update Rule Demo
q_table = np.zeros((5, 2)) # 5 States, 2 Actions
learning_rate = 0.1
gamma = 0.95 # Discount factor

state = 0
action = 1
reward = 10
next_state = 1

# Q-Value Bellman Update
best_next_action_q = np.max(q_table[next_state])
q_table[state, action] += learning_rate * (reward + gamma * best_next_action_q - q_table[state, action])

print("Updated Q-Table Entry:", q_table[state, action])`,
            realLifeScenario: 'AlphaGo and RL agents in robotics use Deep Q-Networks to master complex decision games and robotic arm manipulation.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Reinforcement Learning (RL) trains Agents to take Actions inside an Environment to maximize cumulative Rewards via Markov Decision Processes (MDP) and Deep Q-Networks (DQN).
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            AlphaGo and RL agents in robotics use Deep Q-Networks to master complex decision games and robotic arm manipulation.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
Agent[Agent] --> Action[Action]
Action --> Env[Environment]
Env --> State[New State]
Env --> Reward[Reward]
State --> Agent
Reward --> Agent`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`import numpy as np\n# RL Q-Learning step logic`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Applying these concepts in production allows scaling automated decision-making systems effectively.
                        </p>
                    </div>

                    {/* 6 & 7. Advantages and Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-emerald-400 mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Powerful automation capabilities</li>
                                <li>Scales effectively with <code className="text-cyan-400 font-mono">computational power</code></li>
                                <li>Reduces manual human errors</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-red-400 mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Requires high quality <code className="text-cyan-400 font-mono">data</code></li>
                                <li>Potential for embedded biases</li>
                                <li>Computationally expensive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ai-model-explainability-shap-lime',
            title: '13. [Professional] Model Explainability & Interpretability (SHAP & LIME)',
            definition: 'Explain black-box AI model decisions using SHAP (SHapley Additive exPlanations based on Game Theory) and LIME to meet regulatory compliance requirements.',
            syntax: `import shap
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)
shap.summary_plot(shap_values, X_test)`,
            codeSnippet: `# SHAP Model Interpretation Setup Blueprint
# explainer = shap.Explainer(model, X_train)
# shap_values = explainer(X_test)
# Feature importance plot reveals exact impact of each feature on predictions!`,
            realLifeScenario: 'Healthcare and credit scoring systems utilize SHAP values to explain automated medical diagnosis and loan denial decisions to regulators.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Explain black-box AI model decisions using SHAP (SHapley Additive exPlanations based on Game Theory) and LIME to meet regulatory compliance requirements.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Healthcare and credit scoring systems utilize SHAP values to explain automated medical diagnosis and loan denial decisions to regulators.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
Model[Black-box Model] --> SHAP[SHAP Explainer]
Data[Input Data] --> SHAP
SHAP --> Values[SHAP Values]
Values --> Insight[Feature Importance Insights]`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`import shap\n# Initialize SHAP explainer for your model`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Applying these concepts in production allows scaling automated decision-making systems effectively.
                        </p>
                    </div>

                    {/* 6 & 7. Advantages and Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-emerald-400 mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Powerful automation capabilities</li>
                                <li>Scales effectively with <code className="text-cyan-400 font-mono">computational power</code></li>
                                <li>Reduces manual human errors</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-red-400 mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Requires high quality <code className="text-cyan-400 font-mono">data</code></li>
                                <li>Potential for embedded biases</li>
                                <li>Computationally expensive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ai-mlops-lifecycle-management',
            title: '14. [Professional] MLOps & Model Lifecycle (MLflow & Evidently AI)',
            definition: 'MLOps manages the end-to-end Machine Learning lifecycle: MLflow experiment tracking, Model Registries, Model Monitoring, and Data/Concept Drift detection.',
            syntax: `# MLflow Experiment Tracking Blueprint:
import mlflow
mlflow.start_run()
mlflow.log_param("learning_rate", 0.01)
mlflow.log_metric("accuracy", 0.95)
mlflow.sklearn.log_model(model, "model")
mlflow.end_run()`,
            codeSnippet: `# MLflow Experiment Logging Setup Blueprint
import mlflow

mlflow.set_experiment("Fraud_Detection_v2")

with mlflow.start_run():
    mlflow.log_param("model_type", "XGBoost")
    mlflow.log_metric("auc", 0.982)
    print("Logged experiment run to MLflow Central Server!")`,
            realLifeScenario: 'MLOps engineers monitor live production models for Data Drift (when input feature distributions shift over time).',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            MLOps manages the end-to-end Machine Learning lifecycle: MLflow experiment tracking, Model Registries, Model Monitoring, and Data/Concept Drift detection.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            MLOps engineers monitor live production models for Data Drift (when input feature distributions shift over time).
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph LR
Code[Code/Data] --> Train[Train Model]
Train --> Track[MLflow Tracking]
Track --> Registry[Model Registry]
Registry --> Deploy[Deployment]
Deploy --> Monitor[Monitoring]`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`import mlflow\n# MLflow logging parameters and metrics`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Applying these concepts in production allows scaling automated decision-making systems effectively.
                        </p>
                    </div>

                    {/* 6 & 7. Advantages and Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-emerald-400 mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Powerful automation capabilities</li>
                                <li>Scales effectively with <code className="text-cyan-400 font-mono">computational power</code></li>
                                <li>Reduces manual human errors</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-red-400 mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Requires high quality <code className="text-cyan-400 font-mono">data</code></li>
                                <li>Potential for embedded biases</li>
                                <li>Computationally expensive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ai-edge-ai-quantization-onnx',
            title: '15. [Professional] Edge AI & Model Compression (Quantization & ONNX)',
            definition: 'Deploy AI models onto edge devices (mobiles, IoT) using Quantization (FP32 &rarr; INT8 precision reduction), Pruning, Distillation, and ONNX Runtime execution.',
            syntax: `# PyTorch Model Post-Training Quantization Blueprint:
import torch.quantization
quantized_model = torch.quantization.quantize_dynamic(
    model, {nn.Linear}, dtype=torch.qint8
)`,
            codeSnippet: `# Exporting PyTorch Model to Portable ONNX Format
import torch

dummy_input = torch.randn(1, 3, 224, 224)
# torch.onnx.export(model, dummy_input, "vision_model.onnx", input_names=["input"], output_names=["output"])
print("Exported model to ONNX format for cross-platform edge execution!")`,
            realLifeScenario: 'Converting models to INT8 ONNX or TensorRT formats reduces model memory footprints by 75% while boosting inference speeds 4x on edge microcontrollers.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Deploy AI models onto edge devices (mobiles, IoT) using Quantization (FP32 &rarr; INT8 precision reduction), Pruning, Distillation, and ONNX Runtime execution.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Converting models to INT8 ONNX or TensorRT formats reduces model memory footprints by 75% while boosting inference speeds 4x on edge microcontrollers.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
Train[Trained Model FP32] --> Quant[Quantization INT8]
Train --> Prune[Pruning]
Quant --> ONNX[Export to ONNX]
Prune --> ONNX
ONNX --> Edge[Edge Device Execution]`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`import torch.quantization\n# Quantize PyTorch model dynamic layers`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Applying these concepts in production allows scaling automated decision-making systems effectively.
                        </p>
                    </div>

                    {/* 6 & 7. Advantages and Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-emerald-400 mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Powerful automation capabilities</li>
                                <li>Scales effectively with <code className="text-cyan-400 font-mono">computational power</code></li>
                                <li>Reduces manual human errors</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-red-400 mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Requires high quality <code className="text-cyan-400 font-mono">data</code></li>
                                <li>Potential for embedded biases</li>
                                <li>Computationally expensive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ai-enterprise-architecture-gpu',
            title: '16. [Professional] Enterprise AI System Architecture & Scalability',
            definition: 'Architect scalable enterprise AI systems: Real-time microsecond inference APIs vs Batch inference pipelines, GPU cluster scheduling, and SLA monitoring.',
            syntax: `/* Enterprise AI System Architecture Blueprint:
User Request ──> API Gateway ──> Load Balancer ──> GPU Inference Pods (Triton/vLLM) ──> Redis Cache ──> Response */`,
            codeSnippet: `# Enterprise GPU Triton / vLLM Server Architecture Setup
# Real-Time Microservice API: < 20ms Latency SLA
# Batch Inference Pipeline: Apache Spark / Celery Distributed Processing`,
            realLifeScenario: 'Enterprise AI architectures deploy NVIDIA Triton Inference Server or vLLM to serve high-throughput model requests across GPU worker pools.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Architect scalable enterprise AI systems: Real-time microsecond inference APIs vs Batch inference pipelines, GPU cluster scheduling, and SLA monitoring.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-blue-800 dark:text-blue-300 mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Enterprise AI architectures deploy NVIDIA Triton Inference Server or vLLM to serve high-throughput model requests across GPU worker pools.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram chart={`graph TD
User[User Request] --> API[API Gateway]
API --> LB[Load Balancer]
LB --> Cache[Redis Cache]
LB --> GPU[GPU Pods Triton/vLLM]
GPU --> Storage[Data Storage]`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="flex items-center font-bold text-gray-900 dark:text-white mb-4">
                            <Code className="w-5 h-5 mr-2 text-purple-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`# Architecture configuration details`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="flex items-center font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Applying these concepts in production allows scaling automated decision-making systems effectively.
                        </p>
                    </div>

                    {/* 6 & 7. Advantages and Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-emerald-400 mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Powerful automation capabilities</li>
                                <li>Scales effectively with <code className="text-cyan-400 font-mono">computational power</code></li>
                                <li>Reduces manual human errors</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h4 className="flex items-center font-bold text-red-400 mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                                <li>Requires high quality <code className="text-cyan-400 font-mono">data</code></li>
                                <li>Potential for embedded biases</li>
                                <li>Computationally expensive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    return (
        <CoursePageLayout
            title="AI & Machine Learning Masterclass"
            description="Master AI & ML from Gradient Descent, Scikit-Learn, and XGBoost to PyTorch, CNNs, Transformers, Reinforcement Learning, MLOps, and Edge AI."
            topics={topics}
            icon={Bot}
            colorClass="purple"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {activeTopic.content}
            </div>
        </CoursePageLayout>
    );
};

export default AiCoursePage;
