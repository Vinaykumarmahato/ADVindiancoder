import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Database, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, ShieldAlert, Zap, BarChart2, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface DataScienceTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const DataScienceCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: DataScienceTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'ds-intro-lifecycle',
            title: '1. [Beginner] Introduction & Ecosystem (Data Science Lifecycle)',
            definition: 'Data Science combines domain knowledge, programming (Python), and statistics to transform raw data feeds into actionable business insights across the 5-stage Data Science Lifecycle.',
            syntax: `# Data Science End-to-End Pipeline Blueprint:
Raw Data Ingestion (SQL/APIs) ──> Cleaning (Pandas) ──> Exploratory Analysis (EDA) ──> Modeling (Scikit-Learn) ──> Deployment & Dashboards`,
            codeSnippet: `import pandas as pd
import numpy as np

# Sample Data Ingestion & Cleanup
data = {
    'Customer_ID': range(101, 106),
    'Age': [25, 34, np.nan, 45, 29],
    'Monthly_Spend': [1200, 3400, 2100, 4500, 1800],
    'Churn': [0, 0, 1, 0, 1]
}

df = pd.DataFrame(data)

# Impute Missing Values with Median
df['Age'] = df['Age'].fillna(df['Age'].median())
print("Cleaned Dataset:\\n", df)
print("\\nDescriptive Statistics:\\n", df.describe())`,
            realLifeScenario: 'E-commerce platforms (Amazon, Flipkart) analyze customer browsing history data to predict purchase behavior and automate inventory stocking.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Data Science combines domain knowledge, programming (Python), and statistics to transform raw data feeds into actionable business insights across the 5-stage Data Science Lifecycle.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of a data scientist as a detective. They collect clues (data), clean them up (remove noise), find patterns (EDA), and finally present the case to a jury (dashboard). E-commerce platforms (Amazon, Flipkart) analyze customer browsing history data to predict purchase behavior and automate inventory stocking.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Business Understanding] --> B[Data Mining]; B --> C[Data Cleaning]; C --> D[Data Exploration]; D --> E[Feature Engineering]; E --> F[Predictive Modeling]; F --> G[Data Visualization]; G --> A;`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`import pandas as pd
import numpy as np

# Sample Data Ingestion & Cleanup
data = {
    'Customer_ID': range(101, 106),
    'Age': [25, 34, np.nan, 45, 29],
    'Monthly_Spend': [1200, 3400, 2100, 4500, 1800],
    'Churn': [0, 0, 1, 0, 1]
}

df = pd.DataFrame(data)

# Impute Missing Values with Median
df['Age'] = df['Age'].fillna(df['Age'].median())
print("Cleaned Dataset:\\n", df)`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Predictive inventory management. Retailers use these data points to stock items precisely when demand will peak, avoiding stockouts.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Transforms raw data into <code className="text-cyan-400">actionable insights</code></li>
                                <li>Enables data-driven decision making</li>
                                <li>Applicable to almost any industry</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Highly dependent on <code className="text-cyan-400">data quality</code></li>
                                <li>Requires diverse skillsets (math, code, domain)</li>
                                <li>Can be computationally expensive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ds-numpy-fundamentals',
            title: '2. [Beginner] NumPy Fundamentals (ndarray & Broadcasting)',
            definition: 'NumPy introduces N-dimensional arrays (`ndarray`), vectorization (eliminating slow Python for-loops), broadcasting, and Linear Algebra operations (`np.dot`, `np.linalg`).',
            syntax: `# Vectorized Matrix Operations Blueprint:
import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
C = np.dot(A, B) # Matrix Multiplication`,
            codeSnippet: `import numpy as np

# Vectorized Broadcasting Computation
prices = np.array([100, 200, 300, 400])
discount_rates = 0.15 # Broadcast scalar to vector!

discounted_prices = prices * (1 - discount_rates)

print("Original Prices:", prices)
print("15% Discounted Prices:", discounted_prices)
print("Mean Spend: ₹", np.mean(discounted_prices))`,
            realLifeScenario: 'Vectorized NumPy arrays run high-performance matrix math compiled in C, operating 100x faster than standard Python list loops.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            NumPy introduces N-dimensional arrays (<code className="text-cyan-600 font-mono">ndarray</code>), vectorization (eliminating slow Python for-loops), broadcasting, and Linear Algebra operations.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Imagine applying a 15% discount to 10,000 items in a store. Instead of scanning each item one by one (a loop), NumPy uses a magic wand to discount them all at exactly the same time (vectorization).
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph LR; A[Python List] -->|Slow Loop| B[Operation]; C[NumPy ndarray] -->|C-Compiled| D[Vectorized Operation]; D --> E[100x Faster Result]; B --> F[Slow Result];`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`import numpy as np

prices = np.array([100, 200, 300, 400])
discount_rates = 0.15 # Broadcasting scalar to vector

discounted_prices = prices * (1 - discount_rates)
print("15% Discounted Prices:", discounted_prices)`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            High-performance matrix math compiled in C, operating 100x faster than standard Python list loops, heavily used in computer vision for image processing.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Much faster execution via <code className="text-cyan-400">vectorization</code></li>
                                <li>Memory efficient due to contiguous blocks</li>
                                <li>Broadcasting simplifies complex math syntax</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Requires uniform data types (<code className="text-cyan-400">dtype</code>)</li>
                                <li>Not designed for tabular data with headers</li>
                                <li>Can be hard to debug broadcasting errors</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ds-pandas-manipulation',
            title: '3. [Beginner] Pandas Data Manipulation (.loc, .iloc, fillna)',
            definition: 'Pandas manages tabular data via Series and DataFrames, providing data loading (`pd.read_csv`), filtering, label index selection (`.loc`), position selection (`.iloc`), and missing data handling.',
            syntax: `# Pandas Data Cleaning Blueprint:
df = pd.read_csv('data.csv')
df.dropna(subset=['critical_col'], inplace=True)
df['income'].fillna(df['income'].median(), inplace=True)`,
            codeSnippet: `import pandas as pd

# Load & Filter Data
df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Department': ['IT', 'HR', 'IT', 'Finance'],
    'Salary': [75000, 50000, 90000, 65000]
})

# Filter IT department employees earning > 80,000
high_earners = df.loc[(df['Department'] == 'IT') & (df['Salary'] > 80000)]
print("High Earning IT Staff:\\n", high_earners)`,
            realLifeScenario: 'Financial analysts clean raw transaction logs using Pandas to drop invalid records and compute monthly revenue aggregations.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Pandas manages tabular data via Series and DataFrames, providing data loading, filtering, label index selection, position selection, and missing data handling.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of a Pandas DataFrame as an Excel spreadsheet on steroids. You can command it with code to instantly find all users from a specific city who spent over $500, instead of manually clicking and filtering.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Raw CSV] --> B(pd.read_csv); B --> C{Missing Data?}; C -->|Yes| D[fillna / dropna]; C -->|No| E[.loc / .iloc Selection]; D --> E; E --> F[Clean DataFrame];`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`import pandas as pd

df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Department': ['IT', 'HR', 'IT', 'Finance'],
    'Salary': [75000, 50000, 90000, 65000]
})

# Filter IT department employees earning > 80,000
high_earners = df.loc[(df['Department'] == 'IT') & (df['Salary'] > 80000)]
print(high_earners)`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Financial analysts clean raw transaction logs using Pandas to drop invalid records and compute monthly revenue aggregations.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Handles <code className="text-cyan-400">heterogeneous data</code> easily</li>
                                <li>Rich API for joining and grouping data</li>
                                <li>Excellent built-in time-series support</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>In-memory computation requires <code className="text-cyan-400">high RAM</code></li>
                                <li>Poor performance on multi-core scaling</li>
                                <li>Not ideal for Big Data beyond machine limits</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ds-visualization-matplotlib-seaborn',
            title: '4. [Beginner] Data Visualization (Matplotlib & Seaborn)',
            definition: 'Visualize distributions and relationships using Matplotlib and Seaborn: Line plots, Bar charts, Histograms, Scatter plots, Box plots, and Correlation Heatmaps.',
            syntax: `import matplotlib.pyplot as plt
import seaborn as sns

sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
plt.title("Correlation Heatmap")
plt.show()`,
            codeSnippet: `import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np

# Generate Correlation Data
data = pd.DataFrame(np.random.rand(5, 5), columns=['Age', 'Income', 'Score', 'Spend', 'Visits'])
corr = data.corr()

plt.figure(figsize=(6, 4))
sns.heatmap(corr, annot=True, cmap='Blues')
plt.title("Feature Correlation Matrix")
# plt.show() # Render plot`,
            realLifeScenario: 'Correlation heatmaps reveal multicollinearity relationships between numeric input features during exploratory data analysis.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Visualize distributions and relationships using Matplotlib and Seaborn through line plots, bar charts, histograms, scatter plots, box plots, and correlation heatmaps.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            A table with 1,000 numbers is hard to read. Plotting those numbers on a scatter plot instantly reveals an upward trend (like temperature vs. ice cream sales).
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Data] --> B{Chart Type?}; B -->|Trend| C[Line Plot - Matplotlib]; B -->|Distribution| D[Histogram - Seaborn]; B -->|Relationship| E[Scatter Plot]; B -->|Correlation| F[Heatmap]; C --> G[Insights]; D --> G; E --> G; F --> G;`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np

data = pd.DataFrame(np.random.rand(5, 5), columns=['Age', 'Income', 'Score', 'Spend', 'Visits'])
corr = data.corr()

plt.figure(figsize=(6, 4))
sns.heatmap(corr, annot=True, cmap='Blues')
plt.title("Correlation Matrix")`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Correlation heatmaps reveal multicollinearity relationships between numeric input features during exploratory data analysis for housing price predictions.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Visuals make <code className="text-cyan-400">complex patterns</code> obvious</li>
                                <li>Seaborn provides beautiful defaults</li>
                                <li>Matplotlib allows deep customization</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Matplotlib syntax can be <code className="text-cyan-400">verbose</code></li>
                                <li>Not inherently interactive like Plotly</li>
                                <li>Can struggle rendering millions of points</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },

        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'ds-exploratory-data-analysis',
            title: '5. [Intermediate] Exploratory Data Analysis (EDA & IQR Outliers)',
            definition: 'Exploratory Data Analysis (EDA) inspects distributions, summary statistics (`describe()`), skewness, and identifies statistical outliers using Interquartile Range (IQR).',
            syntax: `# IQR Outlier Detection Blueprint:
Q1 = df['val'].quantile(0.25)
Q3 = df['val'].quantile(0.75)
IQR = Q3 - Q1
outliers = df[(df['val'] < Q1 - 1.5*IQR) | (df['val'] > Q3 + 1.5*IQR)]`,
            codeSnippet: `import pandas as pd
import numpy as np

# IQR Outlier Removal Function
def remove_outliers_iqr(df, column):
    Q1 = df[column].quantile(0.25)
    Q3 = df[column].quantile(0.75)
    IQR = Q3 - Q1
    lower_bound = Q1 - (1.5 * IQR)
    upper_bound = Q3 + (1.5 * IQR)
    return df[(df[column] >= lower_bound) & (df[column] <= upper_bound)]

sample_df = pd.DataFrame({'Price': [10, 12, 11, 14, 13, 100]}) # 100 is an outlier!
cleaned_df = remove_outliers_iqr(sample_df, 'Price')
print("Cleaned Prices (Outliers Removed):\\n", cleaned_df['Price'].values)`,
            realLifeScenario: 'Fraud detection teams isolate anomalous credit card transaction spikes using IQR outlier thresholds.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Exploratory Data Analysis (EDA) inspects distributions, summary statistics, skewness, and identifies statistical outliers using Interquartile Range (IQR).
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            If the average temperature in May is 25°C, but one day it is recorded as 99°C, it's either an outlier error or a major event. EDA helps flag these strange values before building models.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Raw Data] --> B[Summary Stats describe]; B --> C[Check Skewness]; C --> D{Outliers Detected?}; D -->|Yes| E[Calculate IQR]; E --> F[Filter Outliers]; D -->|No| G[Clean Data]; F --> G; G --> H[EDA Report];`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`import pandas as pd

def remove_outliers_iqr(df, column):
    Q1 = df[column].quantile(0.25)
    Q3 = df[column].quantile(0.75)
    IQR = Q3 - Q1
    lower = Q1 - (1.5 * IQR)
    upper = Q3 + (1.5 * IQR)
    return df[(df[column] >= lower) & (df[column] <= upper)]

df = pd.DataFrame({'Price': [10, 12, 11, 14, 13, 100]})
cleaned_df = remove_outliers_iqr(df, 'Price')`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Fraud detection teams isolate anomalous credit card transaction spikes using IQR outlier thresholds to prevent massive fraud losses.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Prevents models from learning <code className="text-cyan-400">bad data</code></li>
                                <li>IQR is robust to skewed distributions</li>
                                <li>Helps uncover fundamental data errors</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>May remove <code className="text-cyan-400">genuine rare events</code></li>
                                <li>Thresholds (1.5x) are somewhat arbitrary</li>
                                <li>Time-consuming manual process</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ds-preprocessing-feature-scaling',
            title: '6. [Intermediate] Data Preprocessing & Cleaning (StandardScaler, SMOTE)',
            definition: 'Preprocess raw datasets using MinMaxScaler (bounds [0, 1]), StandardScaler (Z-score zero mean), One-Hot Encoding for categorical features, and SMOTE for imbalanced classes.',
            syntax: `from sklearn.preprocessing import StandardScaler, OneHotEncoder

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X_numeric)`,
            codeSnippet: `import pandas as pd
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer

# Data Transformation Pipeline
data = pd.DataFrame({
    'City': ['Mumbai', 'Delhi', 'Mumbai', 'Bangalore'],
    'Income': [50000, 75000, 48000, 90000]
})

preprocessor = ColumnTransformer(transformers=[
    ('num', StandardScaler(), ['Income']),
    ('cat', OneHotEncoder(), ['City'])
])

transformed_data = preprocessor.fit_transform(data)
print("Transformed Feature Matrix Shape:", transformed_data.shape)`,
            realLifeScenario: 'Algorithms relying on distance metrics (K-Means, SVM, KNN) require feature scaling via `StandardScaler` to prevent high-magnitude features from dominating calculations.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Preprocess raw datasets using MinMaxScaler (bounds [0, 1]), StandardScaler (Z-score zero mean), One-Hot Encoding for categorical features, and SMOTE for imbalanced classes.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            If you compare house age (10 years) with house price ($500,000), the massive price number will overpower the age mathematically. Scaling ensures both features are treated fairly.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Dataset] --> B{Feature Types}; B -->|Numeric| C[StandardScaler]; B -->|Categorical| D[OneHotEncoder]; C --> E[ColumnTransformer]; D --> E; E --> F{Class Imbalance?}; F -->|Yes| G[SMOTE]; F -->|No| H[Clean Matrix]; G --> H;`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer

preprocessor = ColumnTransformer(transformers=[
    ('num', StandardScaler(), ['Income']),
    ('cat', OneHotEncoder(), ['City'])
])

transformed_data = preprocessor.fit_transform(data)`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Algorithms relying on distance metrics (K-Means, SVM, KNN) require feature scaling via StandardScaler to prevent high-magnitude features from skewing the results.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Dramatically improves <code className="text-cyan-400">model convergence</code></li>
                                <li>OneHotEncoding prevents ordinal misinterpretation</li>
                                <li>SMOTE balances datasets for minority class</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>OHE can cause the <code className="text-cyan-400">curse of dimensionality</code></li>
                                <li>Scaling loses the original unit interpretation</li>
                                <li>SMOTE creates synthetic, not real, data</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ds-probability-statistics-testing',
            title: '7. [Intermediate] Probability & Hypothesis Testing (A/B Testing, p-values)',
            definition: 'Apply Inferential Statistics: Central Limit Theorem, Probability Distributions (Normal, Binomial), Hypothesis Testing (T-Test, Chi-Square), p-values, and A/B Testing.',
            syntax: `# Two-Sample T-Test Hypothesis Testing:
from scipy import stats
t_stat, p_value = stats.ttest_ind(variant_a, variant_b)
if p_value < 0.05:
    print("Statistically Significant Difference (Reject H0)")`,
            codeSnippet: `from scipy import stats
import numpy as np

# A/B Testing Click-Through-Rate (CTR) Comparison
control_group = np.array([1, 0, 1, 0, 0, 1, 0, 1, 0, 0]) # Variant A
treatment_group = np.array([1, 1, 1, 1, 0, 1, 1, 0, 1, 1]) # Variant B (New UI)

t_stat, p_val = stats.ttest_ind(control_group, treatment_group)

print(f"P-Value: {p_val:.4f}")
if p_val < 0.05:
    print("Variant B is Statistically Superior! (Reject Null Hypothesis H0)")
else:
    print("No Statistically Significant Difference Detected (Fail to Reject H0)")`,
            realLifeScenario: 'Product teams use A/B testing hypothesis evaluation to determine whether new website checkout buttons increase conversions.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Apply Inferential Statistics: Central Limit Theorem, Probability Distributions (Normal, Binomial), Hypothesis Testing (T-Test, Chi-Square), p-values, and A/B Testing.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Did the new red "Buy Now" button actually cause a 5% sales increase, or was it just a random lucky day? A p-value tells you the statistical likelihood that the change was purely random.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Define Hypothesis] --> B[Null H0 & Alt H1]; B --> C[Collect Sample Data]; C --> D[Choose Test T-Test/ANOVA]; D --> E[Calculate p-value]; E --> F{p < 0.05?}; F -->|Yes| G[Reject H0]; F -->|No| H[Fail to Reject H0];`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`from scipy import stats
import numpy as np

control = np.array([1, 0, 1, 0, 0, 1, 0, 1])
treatment = np.array([1, 1, 1, 1, 0, 1, 1, 0]) 

t_stat, p_val = stats.ttest_ind(control, treatment)
if p_val < 0.05:
    print("Statistically Significant Difference!")`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Product teams use A/B testing hypothesis evaluation to confidently determine whether new website checkout buttons increase conversions before a full rollout.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Replaces guesswork with <code className="text-cyan-400">mathematical certainty</code></li>
                                <li>Validates if results generalize to populations</li>
                                <li>Protects businesses from costly bad decisions</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>p-values are frequently <code className="text-cyan-400">misinterpreted</code></li>
                                <li>Requires an adequate sample size</li>
                                <li>Statistical significance ≠ practical significance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ds-feature-engineering-selection',
            title: '8. [Intermediate] Feature Engineering & Selection (RFE, SelectKBest)',
            definition: 'Engineer new features using PolynomialFeatures, Binning, and select relevant predictors using Recursive Feature Elimination (RFE) or SelectKBest.',
            syntax: `from sklearn.feature_selection import RFE
from sklearn.linear_model import LogisticRegression

selector = RFE(estimator=LogisticRegression(), n_features_to_select=5)
X_selected = selector.fit_transform(X, y)`,
            codeSnippet: `from sklearn.feature_selection import SelectKBest, f_classif
import pandas as pd
import numpy as np

X = np.random.rand(100, 10) # 10 Features
y = np.random.randint(0, 2, 100)

# Select Top 3 Most Important Features
selector = SelectKBest(score_func=f_classif, k=3)
X_new = selector.fit_transform(X, y)

print("Original Features Shape:", X.shape)
print("Selected Features Shape:", X_new.shape)`,
            realLifeScenario: 'Feature selection removes noisy predictors, cutting model training time and preventing overfitting.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Engineer new features using PolynomialFeatures, Binning, and select relevant predictors using Recursive Feature Elimination (RFE) or SelectKBest.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            If predicting house prices, having "Length" and "Width" is fine, but engineering a new feature "Total Area" (Length × Width) provides a far stronger signal to the model.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[All Features] --> B[Feature Generation]; B --> C[Polynomial/Binning]; C --> D[Feature Selection]; D --> E[RFE]; D --> F[SelectKBest]; E --> G[Top Features]; F --> G; G --> H[Model Training];`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`from sklearn.feature_selection import SelectKBest, f_classif
import numpy as np

X = np.random.rand(100, 10) # 10 Initial Features
y = np.random.randint(0, 2, 100)

selector = SelectKBest(score_func=f_classif, k=3)
X_new = selector.fit_transform(X, y)
print("Reduced to Top 3 Features:", X_new.shape)`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Bioinformatics uses feature selection to filter thousands of genetic markers down to the 5 most relevant genes associated with a disease.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Reduces <code className="text-cyan-400">overfitting</code> from noise</li>
                                <li>Dramatically speeds up model training</li>
                                <li>Increases model interpretability</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>RFE is computationally <code className="text-cyan-400">expensive</code></li>
                                <li>Requires domain knowledge for good features</li>
                                <li>Risks throwing away useful latent patterns</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },

        // ==================== ADVANCED TIER ====================
        {
            id: 'ds-supervised-learning-ml',
            title: '9. [Advanced] Supervised Learning (Random Forest & Metrics)',
            definition: 'Train supervised classification & regression models (Linear/Logistic Regression, Decision Trees, Random Forests, SVM). Evaluate using Precision, Recall, F1-Score, and ROC-AUC.',
            syntax: `from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, roc_auc_score

model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)
y_pred = model.predict(X_test)`,
            codeSnippet: `from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

# Generate Synthetic Classification Dataset
X, y = make_classification(n_samples=500, n_features=8, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train, y_train)
y_pred = clf.predict(X_test)

print(f"Accuracy:  {accuracy_score(y_test, y_pred):.2f}")
print(f"Precision: {precision_score(y_test, y_pred):.2f}")
print(f"Recall:    {recall_score(y_test, y_pred):.2f}")
print(f"F1-Score:  {f1_score(y_test, y_pred):.2f}")`,
            realLifeScenario: 'Banks deploy Random Forest models to assess loan default risk based on credit score, income, and debt ratios.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Train supervised classification &amp; regression models (Linear/Logistic Regression, Decision Trees, Random Forests, SVM). Evaluate using Precision, Recall, F1-Score, and ROC-AUC.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Supervised learning is like a student learning with an answer key. The algorithm makes predictions, checks the answers, and adjusts its internal weights until it gets it mostly right.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Training Data] --> B[Random Forest Model]; B --> C[Train/Fit]; C --> D[Test Data]; D --> E[Predict]; E --> F[Evaluate Metrics]; F --> G[Accuracy/Precision/Recall]; F --> H[ROC-AUC];`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

clf = RandomForestClassifier(n_estimators=100)
clf.fit(X_train, y_train)
y_pred = clf.predict(X_test)

print(classification_report(y_test, y_pred))`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Banks deploy Random Forest models to assess loan default risk based on historical credit score, income, and debt ratio data.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Random Forest resists <code className="text-cyan-400">overfitting</code></li>
                                <li>Provides feature importance out-of-the-box</li>
                                <li>Handles non-linear relationships well</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Requires <code className="text-cyan-400">labeled data</code> (often costly)</li>
                                <li>Ensembles act as black-boxes (hard to interpret)</li>
                                <li>Large models can be slow to predict</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ds-unsupervised-learning-pca',
            title: '10. [Advanced] Unsupervised Learning (K-Means & PCA)',
            definition: 'Discover unlabeled data patterns using K-Means Clustering (Elbow Method evaluation) and reduce high-dimensional feature spaces via Principal Component Analysis (PCA).',
            syntax: `from sklearn.cluster import KMeans
from sklearn.decomposition import PCA

# Dimensionality Reduction
pca = PCA(n_components=2)
X_2d = pca.fit_transform(X)`,
            codeSnippet: `from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
import numpy as np

# Generate High-Dimensional Clusters
X = np.random.rand(100, 10)

# 1. K-Means Clustering
kmeans = KMeans(n_clusters=3, random_state=42)
clusters = kmeans.fit_predict(X)

# 2. Compress 10 Features down to 2 Principal Components for 2D Plotting
pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X)

print("Cluster Assignments Count:", np.bincount(clusters))
print("Explained Variance Ratio:", pca.explained_variance_ratio_)`,
            realLifeScenario: 'Customer segmentation analysis uses K-Means clustering to group users into VIP, Casual, and At-Risk market segments.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Discover unlabeled data patterns using K-Means Clustering (Elbow Method evaluation) and reduce high-dimensional feature spaces via Principal Component Analysis (PCA).
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Unsupervised learning is like sorting a huge pile of mystery Lego blocks into logical groups based purely on their shape and color, without any instruction manual.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Unlabeled Data] --> B[PCA Dimensionality Reduction]; B --> C[K-Means Clustering]; C --> D[Initialize K Centroids]; D --> E[Assign Points]; E --> F[Update Centroids]; F --> G{Converged?}; G -->|No| E; G -->|Yes| H[Final Clusters];`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`from sklearn.cluster import KMeans
from sklearn.decomposition import PCA

pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X)

kmeans = KMeans(n_clusters=3)
clusters = kmeans.fit_predict(X_reduced)`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Customer segmentation: Retailers use K-Means to find natural groupings in customer spend habits, allowing for targeted VIP or retention marketing.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Does not require expensive <code className="text-cyan-400">labels</code></li>
                                <li>PCA reveals hidden intrinsic dimensions</li>
                                <li>K-Means is extremely fast to run</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Requires choosing <code className="text-cyan-400">K in advance</code></li>
                                <li>K-Means struggles with non-spherical clusters</li>
                                <li>PCA axes lose their physical meaning</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ds-cross-validation-hyperparameters',
            title: '11. [Advanced] Cross-Validation & Hyperparameter Tuning (GridSearchCV)',
            definition: 'Evaluate model generalization using Stratified K-Fold Cross-Validation. Tune hyperparameters via GridSearchCV and RandomizedSearchCV while monitoring the Bias-Variance Tradeoff.',
            syntax: `from sklearn.model_selection import GridSearchCV
param_grid = {'n_estimators': [50, 100], 'max_depth': [5, 10]}
grid_search = GridSearchCV(estimator=model, param_grid=param_grid, cv=5)`,
            codeSnippet: `from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier
import numpy as np

X = np.random.rand(200, 5)
y = np.random.randint(0, 2, 200)

param_grid = {
    'n_estimators': [10, 50],
    'max_depth': [3, 5]
}

grid = GridSearchCV(RandomForestClassifier(), param_grid, cv=3)
grid.fit(X, y)

print("Optimal Hyperparameters:", grid.best_params_)
print("Best CV Score:", grid.best_score_)`,
            realLifeScenario: 'GridSearchCV automates searching parameter combinations to find optimal decision tree depths.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Evaluate model generalization using Stratified K-Fold Cross-Validation. Tune hyperparameters via GridSearchCV and RandomizedSearchCV while monitoring the Bias-Variance Tradeoff.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Tuning a model is like adjusting the bass, treble, and volume knobs on an amplifier until the music sounds perfect. GridSearchCV methodically tests every single combination of knobs for you.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Model & Param Grid] --> B[GridSearchCV]; B --> C[K-Fold Split]; C --> D[Train on K-1 Folds]; D --> E[Validate on 1 Fold]; E --> F[Average CV Score]; F --> G{All Params Checked?}; G -->|No| C; G -->|Yes| H[Best Hyperparameters];`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier

param_grid = {'n_estimators': [50, 100], 'max_depth': [5, 10]}
grid = GridSearchCV(RandomForestClassifier(), param_grid, cv=5)
grid.fit(X_train, y_train)

print(grid.best_params_)`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Automates searching parameter combinations to find optimal settings, ensuring the model performs well on unseen production data, not just training data.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Guarantees finding the <code className="text-cyan-400">optimal config</code> in grid</li>
                                <li>CV ensures stable performance estimation</li>
                                <li>Prevents accidental hyperparameter overfitting</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Grid search is <code className="text-cyan-400">exponentially slow</code></li>
                                <li>Combinatorial explosion with many parameters</li>
                                <li>RandomizedSearchCV is often required to save time</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ds-time-series-arima',
            title: '12. [Advanced] Time Series Analysis (ARIMA & Stationarity)',
            definition: 'Model sequential temporal data by checking stationarity via Augmented Dickey-Fuller (ADF) tests, decomposing trend/seasonality, and fitting ARIMA / Prophet models.',
            syntax: `from statsmodels.tsa.arima.model import ARIMA
from statsmodels.tsa.stattools import adfuller

# ADF Stationarity Check:
result = adfuller(df['sales'])
print('ADF P-Value:', result[1])`,
            codeSnippet: `from statsmodels.tsa.arima.model import ARIMA
import pandas as pd
import numpy as np

# Generate Monthly Sales Time Series Data
dates = pd.date_range(start='2024-01-01', periods=24, freq='M')
sales = np.cumsum(np.random.randn(24)) + 100
ts_df = pd.Series(sales, index=dates)

# Fit ARIMA(1, 1, 1) Model
model = ARIMA(ts_df, order=(1, 1, 1))
fitted_model = model.fit()

# Forecast Next 3 Months
forecast = fitted_model.forecast(steps=3)
print("3-Month Sales Forecast:\\n", forecast)`,
            realLifeScenario: 'Financial markets and energy grids forecast future electricity load demand using ARIMA and Facebook Prophet time series models.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Model sequential temporal data by checking stationarity via Augmented Dickey-Fuller (ADF) tests, decomposing trend/seasonality, and fitting ARIMA or Prophet models.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Predicting the weather next week heavily depends on what the weather was yesterday and the day before. Time series models learn the lag and seasonality (like summer heat) to forecast the future.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Time Series Data] --> B[ADF Stationarity Test]; B --> C{Stationary?}; C -->|No| D[Differencing d]; C -->|Yes| E[Determine p, q ACF/PACF]; D --> E; E --> F[Fit ARIMA Model]; F --> G[Forecast Future];`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`from statsmodels.tsa.arima.model import ARIMA

# Fit ARIMA(p=1, d=1, q=1) Model
model = ARIMA(ts_data, order=(1, 1, 1))
fitted = model.fit()

forecast = fitted.forecast(steps=3)
print(forecast)`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Financial markets and energy grids forecast future electricity load demand using ARIMA and Facebook Prophet time series models.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Explicitly handles <code className="text-cyan-400">temporal relationships</code></li>
                                <li>Decomposes seasonality, trend, and noise</li>
                                <li>ARIMA provides solid statistical bounds</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Requires data to be <code className="text-cyan-400">stationary</code> for ARIMA</li>
                                <li>Struggles with abrupt structural breaks</li>
                                <li>Poor at long-term chaotic forecasting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },

        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'ds-mlops-model-deployment',
            title: '13. [Professional] Model Deployment & MLOps (FastAPI & Docker)',
            definition: 'Serialize trained machine learning models using Joblib/Pickle, serve real-time predictions via RESTful FastAPI endpoints, and containerize using Docker.',
            syntax: `# Joblib Model Serialization Blueprint:
import joblib
joblib.dump(model, 'model.joblib')
loaded_model = joblib.load('model.joblib')`,
            codeSnippet: `from fastapi import FastAPI
import joblib
import numpy as np

# FastAPI ML Model Inference Endpoint Blueprint
app = FastAPI()

# Loaded serialized scikit-learn model
# model = joblib.load("model.joblib")

@app.post("/predict")
def predict_churn(features: list[float]):
    # input_data = np.array(features).reshape(1, -1)
    # prediction = model.predict(input_data)
    return {"prediction": 0, "status": "Active Customer"}`,
            realLifeScenario: 'Production MLOps pipelines host serialized scikit-learn models inside lightweight Docker containers on Kubernetes clusters.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Serialize trained machine learning models using Joblib/Pickle, serve real-time predictions via RESTful FastAPI endpoints, and containerize using Docker.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            A trained model sitting on your laptop is useless to customers. MLOps is the process of wrapping that model into a web service (like a fast food drive-thru) so other apps can send it data and get predictions back instantly.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Trained Model] --> B[joblib.dump]; B --> C[Serialized Model .joblib]; C --> D[FastAPI App]; D --> E[Define /predict Endpoint]; E --> F[Docker Containerize]; F --> G[Deploy to Kubernetes];`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`from fastapi import FastAPI
import joblib

app = FastAPI()
model = joblib.load("model.joblib")

@app.post("/predict")
def predict(features: list[float]):
    pred = model.predict([features])
    return {"prediction": int(pred[0])}`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Production MLOps pipelines host serialized scikit-learn models inside lightweight Docker containers on Kubernetes clusters for scale.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Bridges gap between <code className="text-cyan-400">Jupyter and Production</code></li>
                                <li>Docker ensures environments are identical</li>
                                <li>FastAPI provides high-speed asynchronous routing</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Adds massive <code className="text-cyan-400">DevOps overhead</code></li>
                                <li>Pickle/Joblib files can have security vulnerabilities</li>
                                <li>Model drift requires complex monitoring systems</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ds-big-data-pyspark',
            title: '14. [Professional] Big Data Processing with PySpark',
            definition: 'Process massive distributed datasets exceeding memory limits using PySpark DataFrames, Resilient Distributed Datasets (RDDs), and Spark SQL across cluster nodes.',
            syntax: `from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("DataScienceBigData").getOrCreate()
df = spark.read.csv("hdfs://large_data.csv", header=True, inferSchema=True)`,
            codeSnippet: `# PySpark Distributed Data Manipulation Blueprint
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, avg

spark = SparkSession.builder.appName("Demo").getOrCreate()

# Create PySpark DataFrame
data = [("IT", 75000), ("HR", 50000), ("IT", 90000), ("HR", 60000)]
df = spark.createDataFrame(data, ["Department", "Salary"])

# Distributed Aggregation Computation
avg_salary = df.groupBy("Department").agg(avg("Salary").alias("Avg_Salary"))
avg_salary.show()`,
            realLifeScenario: 'Banking networks process terabytes of credit transaction logs concurrently across Apache Spark clusters.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Process massive distributed datasets exceeding memory limits using PySpark DataFrames, Resilient Distributed Datasets (RDDs), and Spark SQL across cluster nodes.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Pandas is like reading a book yourself. PySpark is like ripping the book into 100 sections, giving them to 100 friends, and having them all read at the same time to finish it in 1 minute.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Massive Dataset HDFS] --> B[PySpark DataFrame]; B --> C[Lazy Evaluation DAG]; C --> D[Transformations map/filter]; D --> E[Action collect/count]; E --> F[Distributed Execution]; F --> G[Driver Node Results];`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`from pyspark.sql import SparkSession
from pyspark.sql.functions import avg

spark = SparkSession.builder.appName("Demo").getOrCreate()
df = spark.createDataFrame([("IT", 75000), ("HR", 50000)], ["Dept", "Salary"])

df.groupBy("Dept").agg(avg("Salary")).show()`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Banking networks process terabytes of credit transaction logs concurrently across Apache Spark clusters.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Scales horizontally across <code className="text-cyan-400">thousands of nodes</code></li>
                                <li>In-memory processing is faster than Hadoop MapReduce</li>
                                <li>Lazy evaluation optimizes the execution plan</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Complex infrastructure <code className="text-cyan-400">setup and tuning</code></li>
                                <li>Error messages in JVM are hard to debug in Python</li>
                                <li>Overkill for small datasets (slower than Pandas)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ds-project-lifecycle-storytelling',
            title: '15. [Professional] Storytelling & Streamlit Dashboards',
            definition: 'Translate statistical data findings into interactive business dashboards using Streamlit, communicating insights to C-suite executive stakeholders.',
            syntax: `# Streamlit Interactive Web App Blueprint:
import streamlit as st
st.title("Executive Revenue Dashboard")
st.line_chart(df['Revenue'])`,
            codeSnippet: `/* Streamlit Dashboard CLI Blueprint */
$ pip install streamlit
$ streamlit run app.py

# app.py Script
import streamlit as st
import pandas as pd
import numpy as np

st.title("Data Science Insights Dashboard")
st.write("Interactive Customer Churn Exploration")

df = pd.DataFrame(np.random.randn(20, 2), columns=['Revenue', 'Churn'])
st.line_chart(df)`,
            realLifeScenario: 'Data scientists build interactive Streamlit web apps so non-technical marketing directors can explore scenario simulations.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Translate statistical data findings into interactive business dashboards using Streamlit, communicating insights to C-suite executive stakeholders.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Instead of sending an unreadable CSV file to the CEO, you send them a beautiful web link with a slider. They drag the slider, the chart updates instantly, and they immediately understand the business trend.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Data Findings] --> B[Streamlit Script]; B --> C[UI Components st.slider]; C --> D[Visualizations st.line_chart]; D --> E[Interactive Web App]; E --> F[Executive Review]; F --> G[Business Decisions];`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`import streamlit as st
import pandas as pd
import numpy as np

st.title("Data Science Insights Dashboard")
st.write("Interactive Customer Exploration")

df = pd.DataFrame(np.random.randn(20, 2), columns=['Revenue', 'Churn'])
st.line_chart(df)`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Data scientists build interactive Streamlit web apps so non-technical marketing directors can explore scenario simulations without looking at a single line of code.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Turns Python scripts into web apps <code className="text-cyan-400">instantly</code></li>
                                <li>Requires zero frontend HTML/CSS knowledge</li>
                                <li>Highly interactive out of the box</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>State management can be <code className="text-cyan-400">confusing</code></li>
                                <li>Full page rerenders on every interaction</li>
                                <li>Not customizable like a true React app</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ds-enterprise-automl-pipelines',
            title: '16. [Professional] Enterprise Automated ML (PyCaret, Airflow & DVC)',
            definition: 'Automate model training workflows using AutoML libraries (PyCaret, H2O), orchestrate scheduled data pipelines with Apache Airflow DAGs, and track datasets with DVC.',
            syntax: `# PyCaret AutoML Blueprint:
from pycaret.classification import setup, compare_models
exp = setup(data=df, target='Churn')
best_model = compare_models()`,
            codeSnippet: `# Airflow ETL DAG Definition Blueprint
from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime

def extract_and_clean():
    print("Executing automated ETL pipeline step...")

default_args = {'owner': 'data_science', 'start_date': datetime(2026, 1, 1)}

with DAG('ds_daily_etl', default_args=default_args, schedule_interval='@daily') as dag:
    etl_task = PythonOperator(
        task_id='run_etl',
        python_callable=extract_and_clean
    )`,
            realLifeScenario: 'Enterprise data science teams use Data Version Control (DVC) to track Git commits for gigabyte-scale training datasets.',
            content: (
                <div className="space-y-6">
                    {/* 1. Definition */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            Automate model training workflows using AutoML libraries (PyCaret, H2O), orchestrate scheduled data pipelines with Apache Airflow DAGs, and track datasets with DVC.
                        </p>
                    </div>

                    {/* 2. Real-Life Analogy & Example */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Instead of manually testing 20 different algorithms, AutoML does it automatically while you sleep. Airflow is the robot factory manager that schedules everything to run at 2 AM every night.
                        </p>
                    </div>

                    {/* 3. Visual Explanation (Mermaid.js) */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2" />
                            Visual Explanation
                        </h3>
                        <MermaidDiagram chart={`graph TD; A[Raw Data Pipeline] --> B[Apache Airflow DAG]; B --> C[PyCaret AutoML setup]; C --> D[compare_models]; D --> E[Best Model Picked]; E --> F[DVC Tracks Dataset]; F --> G[Automated Retraining];`} />
                    </div>

                    {/* 4. Sample Code */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-blue-600" />
                            Sample Code
                        </h3>
                        <CodeBlock code={`from pycaret.classification import setup, compare_models

# Automatically preprocess and test 15+ models
exp = setup(data=df, target='Churn')
best_model = compare_models()
print(best_model)`} lang="python" />
                    </div>

                    {/* 5. Real-World Application */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Enterprise data science teams use Data Version Control (DVC) to track Git commits for gigabyte-scale datasets and Airflow to automate daily ETL.
                        </p>
                    </div>

                    {/* 6. Advantages & 7. Disadvantages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-400 flex items-center mb-2">
                                <Check className="w-5 h-5 mr-2" />
                                Advantages
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Massive <code className="text-cyan-400">time savings</code> on boiler-plate code</li>
                                <li>Airflow manages complex dependencies elegantly</li>
                                <li>DVC solves the "which data version was used?" issue</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
                            <h3 className="text-lg font-bold text-red-400 flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Disadvantages / Limitations
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>AutoML abstraction <code className="text-cyan-400">hides important details</code></li>
                                <li>Airflow has a steep learning curve</li>
                                <li>Can be overkill for simple projects</li>
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
            title="Data Science Masterclass Course"
            description="Master Data Science from NumPy, Pandas, and Visualization to Statistics, Scikit-Learn ML, Time Series, PySpark, MLOps, and Streamlit Dashboards."
            topics={topics}
            icon={Database}
            colorClass="blue"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {activeTopic.content}
            </div>
        </CoursePageLayout>
    );
};

export default DataScienceCoursePage;
