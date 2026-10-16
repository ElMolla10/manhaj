#!/usr/bin/env python3
"""Copy ONLY the passages cited by lib/abu-bakr/lessons-*.ts from the private research repo's
master citation index (verbatim text, no PDFs/scans) into lib/abu-bakr/passages.json.
Usage: python3 scripts/sync-abu-bakr-passages.py /path/to/islamic-learning-research"""
import json, re, sys, glob, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
idx = json.load(open(pathlib.Path(sys.argv[1]) / "content_research/_master_citation_index.json"))["entries"]
keys = sorted({k for f in glob.glob(str(root / "lib/abu-bakr/lessons-*.ts")) for k in re.findall(r'key: "([^"]+)"', open(f).read())})
def src(t):
    for needle, s in (("البخاري", "bukhari"), ("هشام", "ibn_hisham"), ("سير أعلام", "siyar"), ("فضائل", "fadail"), ("البداية", "bidayah")):
        if needle in t: return s
    raise SystemExit("unknown source " + t)
out = {}
for k in keys:
    e = idx[k]  # KeyError = citing a passage that does not exist -> fail loudly
    out[k] = {"source": src(e["source_title"]), "volume": None if e["volume"] is None else str(e["volume"]), "page": e["printed_page"], "quote": e["arabic_passage"],
              "gradingNote": e["existing_grading_if_stated"], "gradedBy": e["graded_by"]}
json.dump(out, open(root / "lib/abu-bakr/passages.json", "w"), ensure_ascii=False, indent=1)
print(len(out), "passages")
