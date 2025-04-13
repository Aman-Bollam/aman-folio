export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-2">LSTM Stock Predictor</h2>
          <p className="text-gray-700 mb-4">
            A stock price prediction model using LSTM neural networks, developed for time series
            forecasting with visualizations comparing actual and predicted prices.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Aman-Bollam/LSTM-model-Stock-Predictor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-2">Space Invaders</h2>
          <p className="text-gray-700 mb-4">
            A customizable Java Swing game inspired by the 1978 arcade classic, featuring
            dynamic backgrounds, skins, and progressive difficulty.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Aman-Bollam/Space-Invaders"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 