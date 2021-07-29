using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ad_portal.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "categories",
                columns: table => new
                {
                    CategoryId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Brand = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Model = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OperatingSystem = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MemoryType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MemoryCapacity = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RamCapacity = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cpu = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CpuFrequency = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GpuBrand = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CpuCores = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GpuType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GpuMemory = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GpuChip = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Diagonal = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Color = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_categories", x => x.CategoryId);
                });

            migrationBuilder.CreateTable(
                name: "photos",
                columns: table => new
                {
                    PhotoId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_photos", x => x.PhotoId);
                });

            migrationBuilder.CreateTable(
                name: "ads",
                columns: table => new
                {
                    AdId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Condition = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CategoryId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PhotoId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ads", x => x.AdId);
                    table.ForeignKey(
                        name: "FK_ads_categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "categories",
                        principalColumn: "CategoryId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ads_photos_PhotoId",
                        column: x => x.PhotoId,
                        principalTable: "photos",
                        principalColumn: "PhotoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ads_CategoryId",
                table: "ads",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_ads_PhotoId",
                table: "ads",
                column: "PhotoId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ads");

            migrationBuilder.DropTable(
                name: "categories");

            migrationBuilder.DropTable(
                name: "photos");
        }
    }
}
