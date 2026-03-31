# CashFlow Tracker 💰

**ML-powered cash flow forecasting and explainability system for SMEs with critical shortage alerts**

![Status](https://img.shields.io/badge/Status-Development-yellow)
![Python](https://img.shields.io/badge/Python-3.9%2B-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100%2B-green)
![React](https://img.shields.io/badge/React-18%2B-61DAFB)
![License](https://img.shields.io/badge/License-MIT-purple)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [API Documentation](#api-documentation)
- [ML & Research](#ml--research)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**CashFlow Tracker** is an intelligent cash flow management system designed specifically for Small and Medium Enterprises (SMEs). It combines:

- **Time-series forecasting** (ARIMA, Prophet, XGBoost)
- **Machine learning explainability** (SHAP, LIME)
- **Predictive alerts** for cash flow shortages
- **Real-time financial tracking** (transactions, invoices, recurring expenses)

### Research Focus
This project serves as a research platform to validate:
1. **Hybrid forecasting models** (rule-based recurring cashflows + ML for irregular flows)
2. **Explainability effectiveness** in decision-making for SMEs
3. **Practical ML deployment** in financial systems

---

## ✨ Key Features

### Core Features (MVP)
- ✅ **User Authentication** (JWT-based, owner-only)
- ✅ **Financial Data Management**
  - Transaction tracking
  - Invoice management
  - Recurring expense management
- ✅ **Cash Flow Forecasting**
  - 7, 14, and 30-day predictions
  - Confidence intervals
  - Cash shortage risk classification
- ✅ **Explainability**
  - Top contributing factors to forecasts
  - Feature importance (SHAP values)
  - Plain-language insights
- ✅ **Alerting System**
  - Email notifications for critical shortages
  - Customizable threshold alerts
  - Recommended actions

### Advanced Features (Research)
- 📊 Model versioning & performance tracking
- 📈 Predicted vs. Actual reporting
- 🔍 Model comparison (baselines vs. proposed hybrid model)
- 📚 Reproducible ML pipeline
- 🧪 Explainability evaluation

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | React 18+, JavaScript, Tailwind CSS |
| **Backend** | FastAPI, Python 3.9+ |
| **Database** | PostgreSQL 14+ |
| **ORM** | SQLAlchemy 2.0 / SQLModel |
| **Migrations** | Alembic |
| **Authentication** | JWT (python-jose, passlib) |
| **ML/Data** | pandas, NumPy, scikit-learn, XGBoost, Prophet |
| **Explainability** | SHAP, LIME |
| **HTTP Client** | Axios (Frontend), Requests (Backend) |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    React Dashboard (Web UI)                 │
│                 (Auth, Forms, Charts, Alerts)               │
└────────────────────────┬────────────────────────────────────┘
                         │
                    HTTPS / REST API
                         │
┌────────────────────────▼────────────────────────────────────┐
│                   FastAPI Backend                           │
├─────────────────────────────────────────────────────────────┤
│  API Routes                                                 │
│  ├── /auth        (Login, Register, Token Refresh)         │
│  ├── /transactions (CRUD)                                  │
│  ├── /invoices     (CRUD)                                  │
│  ├── /expenses     (CRUD)                                  │
│  ├── /forecast     (Predict cashflow, shortage risk)       │
│  ├── /explain      (Feature contributions, SHAP)           │
│  ├── /models       (Train, status, metrics)                │
│  └── /reports      (Predicted vs actual, evaluation)       │
├─────────────────────────────────────────────────────────────┤
│  Services                                                   │
│  ├── Cashflow Service (aggregation, feature engineering)   │
│  ├── Import Service (CSV parsing & validation)             │
│  ├── Alert Service (threshold checks, notifications)       │
│  └── ML Service (training, inference, explainability)      │
└────────────────┬──────────────────────┬────────────────────┘
                 │                      │
        ┌────────▼────┐        ┌───────▼─────────┐
        │ PostgreSQL   │        │ ML Engine       │
        │ Database     │        │ ├── Features    │
        │              │        │ ├── Models      │
        │ ├── Users    │        │ ├── SHAP/LIME   │
        │ ├── Txns     │        │ └── Metrics     │
        │ ├── Invoices │        │                 │
        │ └── Models   │        │ (In-app training│
        └──────────────┘        │  or inference)  │
                                └─────────────────┘
```

---

---

## 📁 Project Structure

```
CashFlowTracker/
├── backend/
│   ├── app/
│   │   ├── main.py                 # FastAPI entry point
│   │   ├── core/
│   │   │   ├── config.py           # Configuration & env vars
│   │   │   ├── security.py         # JWT, password hashing
│   │   │   └── logging.py
│   │   ├── db/
│   │   │   ├── session.py          # DB connection
│   │   │   ├── base.py             # Base model
│   │   │   ├── models/
│   │   │   │   ├── user.py
│   │   │   │   ├── transaction.py
│   │   │   │   ├── invoice.py
│   │   │   │   ├── expense.py
│   │   │   │   ├── forecast.py
│   │   │   │   └── model_registry.py
│   │   │   └── migrations/          # Alembic
│   │   ├── api/
│   │   │   ├── deps.py             # Dependency injection
│   │   │   └── routes/
│   │   │       ├── auth.py
│   │   │       ├── transactions.py
│   │   │       ├── invoices.py
│   │   │       ├── expenses.py
│   │   │       ├── forecasts.py
│   │   │       ├── models.py
│   │   │       └── reports.py
│   │   ├── services/
│   │   │   ├── cashflow_service.py
│   │   │   ├── import_service.py
│   │   │   ├── alert_service.py
│   │   │   └── notification_service.py
│   │   └── ml/                     # ML module
│   │       ├── __init__.py
│   │       ├── features.py         # Feature engineering
│   │       ├── train.py            # Model training
│   │       ├── predict.py          # Inference
│   │       ├── explain.py          # SHAP/LIME
│   │       ├── metrics.py          # Evaluation
│   │       └── artifacts.py        # Model storage
│   ├��─ tests/
│   │   ├── test_auth.py
│   │   ├── test_api.py
│   │   └── test_ml.py
│   ├── requirements.txt
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Forecast.jsx
│   │   ├── components/
│   │   │   ├── TransactionForm.jsx
│   │   │   ├── ForecastChart.jsx
│   │   │   ├── AlertNotification.jsx
│   │   │   └── ExplainabilityPanel.jsx
│   │   ├── services/
│   │   │   └── api.js             # API client (Axios)
│   │   ├── styles/
│   │   │   └── index.css
│   │   └── App.jsx
│   ├── public/
│   ├── package.json
│   └── .env.example
├── notebooks/
│   ├── 01_data_exploration.ipynb
│   ├── 02_model_training.ipynb
│   ├── 03_explainability_analysis.ipynb
│   └── 04_results_evaluation.ipynb
├── docs/
│   ├── API_SPEC.md
│   ├── DATABASE_SCHEMA.md
│   ├── ML_PIPELINE.md
│   └── SETUP_GUIDE.md
├── README.md
├── LICENSE
└── .gitignore
```

---

## 🚀 Installation

### Prerequisites
- Python 3.9+
- Node.js 16+
- PostgreSQL 14+
- Git

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Pranav80006/CashFlowTracker.git
   cd CashFlowTracker/backend
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials, JWT secrets, etc.
   ```

5. **Run database migrations:**
   ```bash
   alembic upgrade head
   ```

6. **Start the backend server:**
   ```bash
   uvicorn app.main:app --reload
   ```
   Server runs at: `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file:**
   ```
   REACT_APP_API_URL=http://localhost:8000
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```
   Frontend runs at: `http://localhost:3000`

---

## 🎮 Quick Start

### Start Both Backend & Frontend (Simultaneously)

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate  # or venv\Scripts\activate on Windows
uvicorn app.main:app --reload
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

Then open:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000
- **API Docs:** http://localhost:8000/docs

---

## 📚 API Documentation

### Interactive API Docs (Swagger UI)
Once the backend is running, visit:
- **Swagger UI:** http://localhost:8000/docs
- **ReDoc:** http://localhost:8000/redoc

### Key Endpoints (Preview)

#### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login & get JWT token
- `POST /auth/refresh` - Refresh access token

#### Data Management
- `POST /transactions` - Add transaction
- `GET /transactions` - List transactions
- `POST /invoices` - Add invoice
- `GET /invoices` - List invoices
- `POST /expenses` - Add recurring expense
- `GET /expenses` - List expenses

#### Forecasting & ML
- `GET /forecast?days=7&threshold=50000` - Predict cashflow
- `GET /forecast/explain?forecast_id=...` - Get explainability
- `POST /models/train` - Train/retrain model
- `GET /models/status` - Model version & metrics
- `GET /reports/predicted-vs-actual` - Evaluation report

---

## 🧠 ML & Research

### Model Pipeline
1. **Feature Engineering**
   - Aggregated daily cashflow (inflow, outflow, net)
   - Lagged features (t-1, t-7, t-30)
   - Recurring vs. irregular cashflow decomposition
   - Calendar features (day of week, month, seasonality)

2. **Model Training (In-App)**
   - **Baselines:** Naive, ARIMA, Prophet
   - **Proposed Model:** XGBoost hybrid (rule-based recurring + ML irregular)
   - Training triggered on data updates or manual request

3. **Inference**
   - Predict daily closing balance (7/14/30 days ahead)
   - Classify shortage risk (binary: critical/safe)
   - Generate confidence intervals

4. **Explainability**
   - SHAP values (feature importance per prediction)
   - Top 5 contributing factors
   - Plain-language explanations

### Research Artifacts
- **Notebooks:** `notebooks/` directory with complete analysis
- **Metrics:** Stored in DB for reproducibility
- **Baselines:** Comparison with naive/ARIMA/Prophet
- **Evaluation:** Predicted vs. Actual reports

---

## 🧪 Testing

```bash
# Run all tests
pytest backend/tests/ -v --cov=app

# Run specific test file
pytest backend/tests/test_auth.py -v

# Run with coverage report
pytest backend/tests/ --cov=app --cov-report=html
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -am 'Add feature'`)
4. Push to branch (`git push origin feature/your-feature`)
5. Open a Pull Request

### Code Quality
- Follow PEP 8 for Python
- Use type hints in Python
- Write unit tests (>80% coverage)
- Document functions and modules
- Follow JavaScript ES6+ conventions for frontend

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Contact

- **Issues:** Open an issue on GitHub for bugs/feature requests
- **Discussions:** Use GitHub Discussions for questions

---

## 🎓 Citation (For Research)

If you use this project in your research, please cite:

```bibtex
@software{cashflow_tracker_2026,
  title={CashFlow Tracker: ML-powered Cash Flow Forecasting for SMEs},
  author={Pranav},
  year={2026},
  url={https://github.com/Pranav80006/CashFlowTracker}
}
```

---

## 📈 Project Status

- **Phase 1 (Current):** System Design & Architecture ✅
- **Phase 2 (Next):** Backend Implementation 🔄
- **Phase 3:** Frontend Implementation 📅
- **Phase 4:** Testing & Evaluation 📅
- **Phase 5:** Research Paper & Publication 📅

---

## 🙌 Acknowledgments

- Built with ❤️ for SME financial management
- Research-grade ML pipeline for explainability
- Open-source community tools (FastAPI, React, XGBoost, SHAP)

---

**Last Updated:** March 31, 2026