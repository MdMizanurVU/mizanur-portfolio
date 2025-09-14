#!/bin/bash

# Vercel Deployment Script for Mizanur Rahman Portfolio
# This script ensures all necessary files are in place for successful deployment

echo "🚀 Preparing Mizanur Rahman Portfolio for Vercel Deployment..."

# Ensure we're in the project directory
cd "$(dirname "$0")"

# Create public directory if it doesn't exist
echo "📁 Ensuring public directory exists..."
mkdir -p public

# Verify essential files exist
echo "✅ Checking essential files..."

if [ ! -f "public/index.html" ]; then
    echo "❌ public/index.html missing"
    exit 1
fi

if [ ! -f "vercel.json" ]; then
    echo "❌ vercel.json missing"
    exit 1
fi

if [ ! -f "next.config.js" ]; then
    echo "❌ next.config.js missing"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run build test
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

# Clean up build files for deployment
echo "🧹 Cleaning up for deployment..."
rm -rf .next

echo ""
echo "🎉 Portfolio is ready for Vercel deployment!"
echo ""
echo "Next steps:"
echo "1. Push changes to your GitHub repository"
echo "2. Connect your repo to Vercel"
echo "3. Deploy with these settings:"
echo "   - Framework Preset: Next.js"
echo "   - Build Command: npm run build"
echo "   - Output Directory: .next"
echo "   - Install Command: npm install"
echo ""
echo "📊 Project Structure:"
echo "   ├── app/               (Next.js app directory)"
echo "   ├── components/        (React components)"
echo "   ├── public/           (Static assets - ✅ Ready)"
echo "   ├── vercel.json       (Vercel config - ✅ Ready)"
echo "   ├── next.config.js    (Next.js config - ✅ Ready)"
echo "   └── package.json      (Dependencies - ✅ Ready)"
echo ""
echo "🌐 Expected URLs after deployment:"
echo "   - Main Site: https://your-domain.vercel.app/"
echo "   - Admin Panel: https://your-domain.vercel.app/admin"
echo "   - Server Status: https://your-domain.vercel.app/status"
echo ""
echo "Good luck with your deployment! 🚀"