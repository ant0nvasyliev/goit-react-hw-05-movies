import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const DetailsPage = lazy(() => import('../pages/DetailsPage/DetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFoundPage/NotFound'));
const Layout = lazy(() => import('./Layout/Layout'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<DetailsPage />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster/>
    </>
  );
};
