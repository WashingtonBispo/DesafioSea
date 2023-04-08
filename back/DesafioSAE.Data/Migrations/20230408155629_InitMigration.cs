using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DesafioSEA.Data.Migrations
{
    public partial class InitMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Email = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: false),
                    isAdmin = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Email);
                });

            migrationBuilder.CreateTable(
                name: "Story",
                columns: table => new
                {
                    IdStory = table.Column<string>(type: "text", nullable: false),
                    StoryText = table.Column<string>(type: "text", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    AuthorEmail = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Story", x => x.IdStory);
                    table.ForeignKey(
                        name: "FK_Story_User_AuthorEmail",
                        column: x => x.AuthorEmail,
                        principalTable: "User",
                        principalColumn: "Email",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "StoryEntityUserEntity",
                columns: table => new
                {
                    LikesEmail = table.Column<string>(type: "text", nullable: false),
                    LikesIdStory = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StoryEntityUserEntity", x => new { x.LikesEmail, x.LikesIdStory });
                    table.ForeignKey(
                        name: "FK_StoryEntityUserEntity_Story_LikesIdStory",
                        column: x => x.LikesIdStory,
                        principalTable: "Story",
                        principalColumn: "IdStory",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_StoryEntityUserEntity_User_LikesEmail",
                        column: x => x.LikesEmail,
                        principalTable: "User",
                        principalColumn: "Email",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Story_AuthorEmail",
                table: "Story",
                column: "AuthorEmail");

            migrationBuilder.CreateIndex(
                name: "IX_StoryEntityUserEntity_LikesIdStory",
                table: "StoryEntityUserEntity",
                column: "LikesIdStory");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StoryEntityUserEntity");

            migrationBuilder.DropTable(
                name: "Story");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
