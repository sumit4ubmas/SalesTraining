create extension if not exists "pgcrypto";

create table if not exists public.learning_paths (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  certificate_code text not null unique,
  release_date date not null,
  created_at timestamptz not null default now()
);

create table if not exists public.learner_progress (
  id uuid primary key default gen_random_uuid(),
  learner_id uuid not null,
  learning_path_id uuid not null references public.learning_paths(id) on delete cascade,
  completion_ratio numeric(5, 2) not null default 0,
  certified_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists learner_progress_learner_idx on public.learner_progress(learner_id);
create index if not exists learner_progress_path_idx on public.learner_progress(learning_path_id);
