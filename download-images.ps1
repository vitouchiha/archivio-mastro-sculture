# download-images.ps1
# Downloads all images from the WordPress site to public/images/
# Run this script from the project root: .\download-images.ps1

$baseUrl = "https://www.archiviomastrosculture.it/wp-content/uploads"
$dest    = Join-Path $PSScriptRoot "public\images"

function Download-Image {
  param([string]$url, [string]$localPath)
  $dir = Split-Path $localPath -Parent
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
  if (Test-Path $localPath) { Write-Host "  SKIP  $localPath" ; return }
  try {
    Invoke-WebRequest -Uri $url -OutFile $localPath -UseBasicParsing -ErrorAction Stop
    Write-Host "  OK    $localPath"
  } catch {
    Write-Host "  FAIL  $url  ($_)"
  }
}

# ---- HOME images ----
$homeImages = @(
  "2022/12/HP01B-1024x1024.jpg",
  "2022/12/HP02B-1024x1024.jpg",
  "2022/12/HP03B-1024x1024.jpg",
  "2022/12/HP04B-1024x1024.jpg",
  "2023/06/disegnai_collage-1024x1024.jpg"
)

# Save as simpler names the code references
$homeMap = @{
  "2022/12/HP01B-1024x1024.jpg"           = "HP01B.jpg"
  "2022/12/HP02B-1024x1024.jpg"           = "HP02B.jpg"
  "2022/12/HP03B-1024x1024.jpg"           = "HP03B.jpg"
  "2022/12/HP04B-1024x1024.jpg"           = "HP04B.jpg"
  "2023/06/disegnai_collage-1024x1024.jpg"= "disegnai_collage.jpg"
}

foreach ($rel in $homeImages) {
  $url   = "$baseUrl/$rel"
  $fname = $homeMap[$rel]
  $local = Join-Path $dest $fname
  Download-Image -url $url -localPath $local
}

# Book thumbnail
Download-Image -url "https://www.archiviomastrosculture.it/wp-content/uploads/elementor/thumbs/libro_300px-q3tbw6p83n92qj9u979pgapcqw4h3batbmf9xxhb94.jpg" `
               -localPath (Join-Path $dest "libro_300px.jpg")

# ---- ESPERIENZE GIOVANILI  (2023/01) ----
Write-Host "`n--- Esperienze Giovanili ---"
$folder = "2023/01"
1..25 | ForEach-Object {
  $n   = $_.ToString("D2")
  Download-Image "$baseUrl/$folder/EG$n.jpg" "$dest\$folder\EG$n.jpg"
}
Download-Image "$baseUrl/$folder/EGX01.jpg" "$dest\$folder\EGX01.jpg"

# ---- ASTRAZIONI SIMBOLICHE  (2023/04) ----
Write-Host "`n--- Astrazioni Simboliche ---"
$folder = "2023/04"
1..28 | ForEach-Object {
  $n   = $_.ToString("D2")
  Download-Image "$baseUrl/$folder/${n}AS.jpg"  "$dest\$folder\${n}AS.jpg"
}
Download-Image "$baseUrl/$folder/01ASX.jpg"  "$dest\$folder\01ASX.jpg"
Download-Image "$baseUrl/$folder/01ASXa.jpg" "$dest\$folder\01ASXa.jpg"

# ---- GEOMETRIE ELEMENTARI  (2023/04 + 2023/05 for GE14) ----
Write-Host "`n--- Geometrie Elementari ---"
$folder = "2023/04"
1..13 | ForEach-Object {
  $n = $_.ToString("D2")
  Download-Image "$baseUrl/$folder/GE$n.jpg" "$dest\$folder\GE$n.jpg"
}
Download-Image "$baseUrl/2023/05/GE14.jpg" "$dest\2023\05\GE14.jpg"
15..28 | ForEach-Object {
  $n = $_.ToString("D2")
  Download-Image "$baseUrl/$folder/GE$n.jpg" "$dest\$folder\GE$n.jpg"
}
Download-Image "$baseUrl/$folder/GEX01.jpg" "$dest\$folder\GEX01.jpg"

# ---- FIGURAZIONI RACCONTI I  (2023/04) ----
Write-Host "`n--- Figurazioni Racconti I ---"
$folder = "2023/04"
1..28 | ForEach-Object {
  $n = $_.ToString("D2")
  Download-Image "$baseUrl/$folder/FR$n.jpg" "$dest\$folder\FR$n.jpg"
}
Download-Image "$baseUrl/$folder/FRX01.jpg"  "$dest\$folder\FRX01.jpg"
Download-Image "$baseUrl/$folder/FRX01a.jpg" "$dest\$folder\FRX01a.jpg"

# ---- FIGURAZIONI RACCONTI II  (2023/05) ----
Write-Host "`n--- Figurazioni Racconti II ---"
$folder = "2023/05"
1..28 | ForEach-Object {
  $n = $_.ToString("D2")
  Download-Image "$baseUrl/$folder/F$n.jpg" "$dest\$folder\F$n.jpg"
}
Download-Image "$baseUrl/$folder/FX01.jpg"  "$dest\$folder\FX01.jpg"
Download-Image "$baseUrl/$folder/FX01a.jpg" "$dest\$folder\FX01a.jpg"

# ---- DISEGNI COLLAGE  (2023/05) ----
Write-Host "`n--- Disegni Collage ---"
$folder = "2023/05"
1..28 | ForEach-Object {
  $n = $_.ToString("D2")
  Download-Image "$baseUrl/$folder/DC$n.jpg" "$dest\$folder\DC$n.jpg"
}
Download-Image "$baseUrl/$folder/DCX01.jpg" "$dest\$folder\DCX01.jpg"

# ---- EXTRAS ----
Write-Host "`n--- Extra images ---"
Download-Image "$baseUrl/2023/06/icona-sx.png"  "$dest\2023\06\icona-sx.png"
Download-Image "$baseUrl/2023/06/icona_dx.png"  "$dest\2023\06\icona_dx.png"
Download-Image "$baseUrl/2023/02/quagri.jpg"    "$dest\2023\02\quagri.jpg"

Write-Host "`nDownload completato!"
