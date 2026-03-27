#!/bin/bash
# deploy.sh — 一键发布博客到 Vercel
# 用法: ./deploy.sh "commit message"

set -e

MSG="${1:-update blog $(date +%Y-%m-%d_%H:%M:%S)}"

echo "📦 Building..."
npm run build

echo "📝 Committing: $MSG"
git add -A
git commit -m "$MSG" || echo "Nothing to commit"

echo "🚀 Pushing to GitHub..."
git push origin main --force

echo "🌐 Deploying to Vercel..."
npx vercel --prod

echo "✅ Done!"
