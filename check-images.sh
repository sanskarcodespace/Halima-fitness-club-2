#!/bin/bash
# =============================================================================
# Halima Fitness Club — Image Setup Script
# =============================================================================
# PURPOSE: Copy conversation-provided real photos to /public/images/
# 
# INSTRUCTIONS:
# 1. Save each image from the chat conversation to your computer
# 2. Rename and place them as listed below
# 3. The website will automatically use them
#
# REQUIRED PHOTOS:
#
# Coach Halima photo (the branded circular image):
#   Save to: public/images/coach-halima.jpg
#
# Client transformation photos:
#   Save to: public/images/result-collage.jpg       (the "MY TEAM RESULT" black collage)
#   Save to: public/images/result-client1.jpg       (73kg → 55kg before/after)
#   Save to: public/images/result-client2.jpg       (10kg in 2 months before/after)
#   Save to: public/images/result-rana-tabassum.jpg (Rana Tabassum 42kg before/after)
#
# After placing the files, refresh the browser — images will appear automatically.
# =============================================================================

echo "Checking required image files..."

IMAGES_DIR="$(dirname "$0")/public/images"

check_file() {
  if [ -f "$IMAGES_DIR/$1" ]; then
    echo "  ✅ $1 — found"
  else
    echo "  ❌ $1 — MISSING (place this file to show image on website)"
  fi
}

check_file "coach-halima.jpg"
check_file "result-collage.jpg"
check_file "result-client1.jpg"
check_file "result-client2.jpg"
check_file "result-rana-tabassum.jpg"
check_file "hero-lifestyle.jpg"
check_file "online-classes.jpg"
check_file "challenge-nutrition.jpg"

echo ""
echo "Done. Place any missing files in: $IMAGES_DIR"
