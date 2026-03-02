export default function BlogLoading() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-primary-950 text-white section-padding">
        <div className="container-max text-center">
          <div className="h-6 w-24 bg-dark-700 rounded-full mx-auto mb-6 animate-pulse" />
          <div className="h-12 w-96 max-w-full bg-dark-700 rounded-lg mx-auto mb-6 animate-pulse" />
          <div className="h-5 w-80 max-w-full bg-dark-700 rounded-lg mx-auto animate-pulse" />
        </div>
      </section>
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-dark-50 rounded-2xl overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-dark-200" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-dark-200 rounded w-1/3" />
                  <div className="h-6 bg-dark-200 rounded w-3/4" />
                  <div className="h-4 bg-dark-200 rounded w-full" />
                  <div className="h-4 bg-dark-200 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}